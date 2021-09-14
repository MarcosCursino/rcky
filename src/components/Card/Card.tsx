import { FormEvent, useState, useEffect } from "react";
import InputMask from "react-input-mask";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { toCurrency } from "../../utils/FormatedPrice";
import api from "../../service/api";

import Editar from "../../assets/Editar.svg";
import Lixo from "../../assets/Lixo.svg";

import styles from "./Card.module.scss";
interface EmployeeProps {
  id: number;
  nome: string;
  endereco: string;
  dtNascimento: string;
  salario: number;
  genero: string;
}

export function Card() {
  const location = useLocation();
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [birth, setBirth] = useState("");
  const [wage, setWage] = useState(0);
  const [genre, setGenre] = useState("");
  const [updateLit, setUpdateList] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleData() {
    api
      .get("funcionarios")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }

  function handleDelete(id: number) {
    api
      .delete(`funcionarios/${id}`)
      .then(() => {
        handleData();
        toast.info("Usuário excluído com sucesso!", {
          autoClose: 2200,
          hideProgressBar: true,
        });
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }

  function openModalEdit(employee: EmployeeProps) {
    setId(employee.id);
    setName(employee.nome);
    setAdress(employee.endereco);
    setBirth(employee.dtNascimento);
    setWage(employee.salario);
    setGenre(employee.genero);
    openModal();
  }

  function handleEditEmployee(e: FormEvent) {
    e.preventDefault();

    const data = {
      id: id,
      nome: name,
      endereco: adress,
      dtNascimento: birth,
      salario: wage,
      genero: genre,
    };

    api
      .put(`funcionarios/${id}`, data)
      .then(() => {
        closeModal();
        toast.info("Usuário editado com sucesso!", {
          autoClose: 2200,
          hideProgressBar: true,
        });
        setUpdateList(!updateLit);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }

  useEffect(() => {
    handleData();
  }, [updateLit, location]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.overLay}
        ariaHideApp={false}
      >
        <form className={styles.containerModal} onSubmit={handleEditEmployee}>
          <h2>Editar funcionário</h2>

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Endereço"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />

          <InputMask
            placeholder="Data de Nascimento"
            mask="99/99/9999"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />

          <input
            type="number"
            placeholder="Salário"
            value={wage}
            onChange={(e) => setWage(Number(e.target.value))}
          />

          <input
            type="text"
            placeholder="Genero"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <button type="submit">Alterar</button>
        </form>
      </Modal>

      {employees.map((employee) => (
        <div key={employee.id} className={styles.card}>
          <div className={styles.info}>
            <strong>Id:</strong>
            <span>{employee.id}</span>
          </div>

          <div className={styles.info}>
            <strong>Nome:</strong>
            <span>{employee.nome}</span>
          </div>

          <div className={styles.info}>
            <strong>Endereço:</strong>
            <span>{employee.endereco}</span>
          </div>

          <div className={styles.info}>
            <strong>Data de nascimento:</strong>
            <span>{employee.dtNascimento}</span>
          </div>

          <div className={styles.info}>
            <strong>Salario:</strong>
            <span>{toCurrency(employee.salario)}</span>
          </div>

          <div className={styles.info}>
            <strong>Gênero:</strong>
            <span>{employee.genero}</span>
          </div>

          <div className={styles.containerBtn}>
            <button type="button">
              <img
                src={Editar}
                alt="Editar"
                onClick={() => openModalEdit(employee)}
              />
            </button>
            <button type="button">
              <img
                src={Lixo}
                alt="Excluir"
                onClick={() => handleDelete(employee.id)}
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

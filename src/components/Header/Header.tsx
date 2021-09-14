import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import Modal from "react-modal";
import api from "../../service/api";

import styles from "./Header.module.scss";

import Add from "../../assets/add.svg";
import Logo from "../../assets/logo.png";

export function Header() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [birth, setBirth] = useState("");
  const [wage, setWage] = useState(0);
  const [genre, setGenre] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleCreateEmployee(e: FormEvent) {
    e.preventDefault();

    const data = {
      nome: name,
      endereco: adress,
      dtNascimento: birth,
      salario: wage,
      genero: genre,
    };

    api
      .post("funcionarios", data)
      .then(() => {
        closeModal();
        history.push("/");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.overLay}
        ariaHideApp={false}
      >
        <form className={styles.containerModal} onSubmit={handleCreateEmployee}>
          <h2>Cadastrar funcionário</h2>

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
            onChange={(e) => setWage(Number(e.target.value))}
          />

          <input
            type="text"
            placeholder="Genero"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Modal>

      <header className={styles.header}>
        <div className={styles.inner}>
          <img src={Logo} alt="Logo Rcky" />
          <button type="button" className={styles.button} onClick={openModal}>
            Adicionar
            <img src={Add} alt="Adicionar" />
          </button>
        </div>
      </header>
      <div className={styles.placeholder} />
    </>
  );
}

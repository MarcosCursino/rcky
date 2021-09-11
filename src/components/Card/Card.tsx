import { useState, useEffect } from "react";
import styles from "./Card.module.scss";

import api from "../../service/api";

import Editar from "../../assets/Editar.svg";
import Lixo from "../../assets/Lixo.svg";

interface EmployeeProps {
  id: number;
  nome: string;
  endereco: string;
  dtNascimento: string;
  salario: string;
  genero: string;
}

export function Card() {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);

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

  function handleDelete(id:number) {
    api
      .delete(`funcionarios/${id}`)
      .then((response) => {
        handleData();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
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
            <span>{employee.salario}</span>
          </div>

          <div className={styles.info}>
            <strong>Gênero:</strong>
            <span>{employee.genero}</span>
          </div>

          <div className={styles.containerBtn}>
            <button type="button">
              <img src={Editar} alt="Editar" />
            </button>
            <button type="button">
              <img src={Lixo} alt="Excluir" onClick={() => handleDelete(employee.id)} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

import styles from "./Card.module.scss";

import Editar from "../../assets/Editar.svg";
import Lixo from "../../assets/Lixo.svg";

export function Card() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.info}>
          <strong>Id:</strong>
          <span>1</span>
        </div>

        <div className={styles.info}>
          <strong>Nome:</strong>
          <span>Marcos Cursino Pereira</span>
        </div>

        <div className={styles.info}>
          <strong>Endereço:</strong>
          <span>Rua Quantinguaba, 05 - Penha</span>
        </div>

        <div className={styles.info}>
          <strong>Data de nascimento:</strong>
          <span>14/05/1997</span>
        </div>

        <div className={styles.info}>
          <strong>Gênero:</strong>
          <span>Masculino</span>
        </div>

        <div className={styles.containerBtn}>
          <button type="button">
            <img src={Editar} alt="Editar" />
          </button>
          <button type="button">
            <img src={Lixo} alt="Excluir" />
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.info}>
          <strong>Id:</strong>
          <span>1</span>
        </div>

        <div className={styles.info}>
          <strong>Nome:</strong>
          <span>Marcos Cursino Pereira</span>
        </div>

        <div className={styles.info}>
          <strong>Endereço:</strong>
          <span>Rua Quantinguaba, 05 - Penha</span>
        </div>

        <div className={styles.info}>
          <strong>Data de nascimento:</strong>
          <span>14/05/1997</span>
        </div>

        <div className={styles.info}>
          <strong>Gênero:</strong>
          <span>Masculino</span>
        </div>

        <div className={styles.containerBtn}>
          <button type="button">
            <img src={Editar} alt="Editar" />
          </button>
          <button type="button">
            <img src={Lixo} alt="Excluir" />
          </button>
        </div>
      </div>
    </>
  );
}

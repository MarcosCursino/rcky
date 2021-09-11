import styles from "./Header.module.scss";

import Add from "../../assets/add.svg";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h2>Rcky funcionários</h2>
          <button type="button" className={styles.button}>
            Adicionar
            <img src={Add} alt="Adicionar" />
          </button>
        </div>
      </header>
      <div className={styles.placeholder} />
    </>
  );
}

import styles from "./Header.module.scss";

import Add from "../../assets/add.svg";
import Logo from "../../assets/logo.png" 

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <img src={Logo} alt="Logo Rcky" />
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

import styles from "./Home.module.scss";

import { Card } from "../components/Card/Card";

export function Home() {
  return (
    <>
      <div className={styles.container}>
        <Card />
      </div>
    </>
  );
}

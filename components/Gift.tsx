import styles from "../styles/Gift.module.css";

function Gift(): JSX.Element {
  return (
    <div className={styles.gift}>
      <div className={styles.lid}></div>
      <div className={styles.body}></div>
      <div className={styles.lasso__first}></div>
      <div className={styles.lasso__second}></div>
    </div>
  );
}

export { Gift };

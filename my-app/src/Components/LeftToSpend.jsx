import styles from "./LeftToSpend.module.css";

function LeftToSpend() {
  return (
    <div className={styles.leftToSpend}>
      <h2 className={styles.heading}>Left to spend</h2>
      <h2>£2,300,45 out of £2,500.00</h2>
      <progress value={0.5} />
    </div>
  );
}

export default LeftToSpend;

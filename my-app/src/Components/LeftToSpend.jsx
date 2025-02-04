import styles from "./LeftToSpend.module.css";

function LeftToSpend({ totalMinusExpenses, income }) {
  const progressPercentage =
    income > 1 ? (totalMinusExpenses / income) * 100 : 0;

  console.log(progressPercentage);

  return (
    <div className={styles.leftToSpend}>
      <h2 className={styles.heading}>Left to spend</h2>
      <h2>
        £{totalMinusExpenses} out of £{income}
      </h2>
      <progress value={progressPercentage} max={100} />
    </div>
  );
}

export default LeftToSpend;

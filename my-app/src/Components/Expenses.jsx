import styles from "./Expenses.module.css";

function Expenses() {
  return (
    <>
      <div className={styles.expenses}>
        <h1>Expenses</h1>
      </div>
      <div className={styles.userExpensesContainer}>
        <input className={styles.input} type="text" placeholder="Add Expense" />

        <h3 className={styles.userExpenses}>Sourdough Bread - $5</h3>
        <h3 className={styles.userExpenses}>Avacado - $5</h3>
        <h3 className={styles.userExpenses}>Oat Milk - $5</h3>
      </div>
    </>
  );
}

export default Expenses;

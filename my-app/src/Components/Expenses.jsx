import { useState } from "react";
import styles from "./Expenses.module.css";

function Expenses() {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  console.log(expenseName);
  console.log(expenseAmount);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "expenseName") {
      setExpenseName(value);
    } else if (name === "expenseAmount") {
      setExpenseAmount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenseName;
    setExpenseAmount;
  };

  return (
    <>
      <div className={styles.expenses}>
        <h1 className={styles.headingUnderline}>Expenses</h1>
      </div>
      <div className={styles.userExpensesContainer}>
        <div className={styles.submitForm}>
          <form>
            <input
              className={styles.input}
              type="text"
              name="expenseName"
              value={expenseName}
              onChange={handleChange}
              placeholder="Expense Description"
            />

            <input
              className={styles.input}
              type="text"
              name="expenseAmount"
              value={expenseAmount}
              onChange={handleChange}
              placeholder="Expense Amount"
            />
            <button className={styles.button}>Add Expense</button>
          </form>
        </div>

        <h3 className={styles.userExpenses}>Sourdough Bread - $5</h3>
        <h3 className={styles.userExpenses}>Avacado - $5</h3>
        <h3 className={styles.userExpenses}>Oat Milk - $5</h3>
      </div>
    </>
  );
}

export default Expenses;

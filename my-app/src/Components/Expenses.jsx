import { useState } from "react";
import styles from "./Expenses.module.css";

function Expenses({ userSubmissions, setUserSubmissions }) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  function handleDescriptionChange(e) {
    setExpenseName(e.target.value);
  }

  function handleAmountChange(e) {
    setExpenseAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const submission = {
      itemDescription: expenseName,
      itemAmount: expenseAmount,
    };

    setUserSubmissions((prevSubmissions) => [...prevSubmissions, submission]);

    setExpenseName("");
    setExpenseAmount("");
  }

  return (
    <>
      <div className={styles.expenses}>
        <h1 className={styles.headingUnderline}>Expenses</h1>
      </div>
      <div className={styles.userExpensesContainer}>
        <div className={styles.submitForm}>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              name="expenseName"
              value={expenseName}
              onChange={handleDescriptionChange}
              placeholder="Expense Description"
            />

            <input
              className={styles.input}
              type="text"
              name="expenseAmount"
              value={expenseAmount}
              onChange={handleAmountChange}
              placeholder="Expense Amount"
            />
            <button className={styles.button}>Add Expense</button>
          </form>
        </div>
      </div>

      <div>
        <ul>
          {userSubmissions.map((user) => {
            return (
              <li key={user.itemDescription}>
                {user.itemDescription} - {user.itemAmount}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Expenses;

/*


*/

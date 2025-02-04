import styles from "./AccountTracking.module.css";
import nextPageIcon from "../assets/nextPage.png";
import incomeImage from "../assets/income.png";
import outgoingsImage from "../assets/outgoings.png";

function AccountTracking({ income, email, total }) {
  return (
    <>
      <div className={styles.welcomeBackContainer}>
        <h1 className={styles.welcomeBackDefault}>Welcome back</h1>
        <h1 className={styles.welcomeBack}>{email}</h1>
      </div>
      <div className={styles.mainBox}>
        <div className={styles.defaultBox}>
          <div>
            <h3 className={styles.lightText}>Balance</h3>
            <h3 className={styles.balanceNumber}>£{income - total}</h3>
          </div>
          <div>
            <img
              className={styles.nextArrow}
              src={nextPageIcon}
              alt="calender"
            />
          </div>
        </div>

        <div className={styles.expenseIncome}>
          <div className={styles.rightBox}>
            <img className={styles.income} src={incomeImage} alt="income" />

            <div className={styles.expenses}>
              <h3 className={styles.lightText}>Expenses</h3>
              <h3>£700</h3>
            </div>
          </div>

          <div>
            <div className={styles.leftBox}>
              <img
                className={styles.income}
                src={outgoingsImage}
                alt="outgoings"
              />

              <div>
                <h3 className={styles.lightText}>Income</h3>
                <h3>£1500</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountTracking;

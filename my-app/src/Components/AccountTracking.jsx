import styles from "./AccountTracking.module.css";
import nextPageIcon from "../assets/nextPage.png";
import income from "../assets/income.png";
import outgoings from "../assets/outgoings.png";

function AccountTracking() {
  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.defaultBox}>
          <div>
            <h3 className={styles.lightText}>Default</h3>
            <h3 className={styles.balanceNumber}>£2345.30</h3>
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
            <img className={styles.income} src={income} alt="income" />

            <div className={styles.expenses}>
              <h3 className={styles.lightText}>Expenses</h3>
              <h3>£700</h3>
            </div>
          </div>

          <div>
            <div className={styles.leftBox}>
              <img className={styles.income} src={outgoings} alt="outgoings" />

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

import upcomingCalender from "../assets/Upcoming.png";
import styles from "./Summary.module.css";

function Summary() {
  return (
    <div className={styles.upcomingCalenderMain}>
      <img
        className={styles.upcomingCalender}
        src={upcomingCalender}
        alt="calender"
      />

      <h1>Upcoming Transactions</h1>
    </div>
  );
}

export default Summary;

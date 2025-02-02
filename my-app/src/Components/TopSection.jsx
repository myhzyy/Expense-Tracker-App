import styles from "./TopSection.module.css";
import taskbarIcon from "../assets/calender.png";
import hamBurgerIcon from "../assets/hamBurgerMenu.png";

function TopSection() {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/ ${today.getFullYear()}`;

  return (
    <div className={styles.mainContainer}>
      <img className={styles.topIcon} src={taskbarIcon} alt="calender" />
      <h1>{formattedDate}</h1>
      <img
        className={styles.hamBurgerMenu}
        src={hamBurgerIcon}
        alt="calender"
      />
    </div>
  );
}

export default TopSection;

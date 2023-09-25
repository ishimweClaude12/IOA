import styles from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>AIO</div>
      <div>
        <ul className={styles.list}>
          <NavLink className={styles.li} to="/">
            Home
          </NavLink>
          <NavLink className={styles.li} to="/counter">
            Counter
          </NavLink>
          <NavLink className={styles.li} to="/to-do">
            To Do
          </NavLink>
          <NavLink className={styles.li} to="/notes">
            Notes
          </NavLink>
          <NavLink className={styles.li} to="/about-me">
            About Me
          </NavLink>
          <NavLink className={styles.li} to="/faq">
            FAQs
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
export default Nav;

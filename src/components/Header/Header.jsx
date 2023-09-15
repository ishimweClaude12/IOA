import styles from "./header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className={styles.header}>
      <Nav />
    </div>
  );
};
export default Header;

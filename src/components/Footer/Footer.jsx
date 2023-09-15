import styles from "./footer.module.css";
const name = "Claude";
const Footer = () => {
  return (
    <div className={styles.footer}>
      Copyright {name} @ {new Date().getFullYear()}
    </div>
  );
};
export default Footer;

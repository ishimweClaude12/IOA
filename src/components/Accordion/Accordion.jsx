import styles from "./accordion.module.css";

export default function Accordion({
  num,
  title,
  content,
  currentlyOpen,
  onCurrentlyOpen,
}) {
  const isOpen = num === currentlyOpen;
  return (
    <div
      className={styles.container}
      // onClick={() => setIsOpen((prev) => !prev)}
      onClick={() => onCurrentlyOpen(num)}
      style={{ borderTop: `${isOpen ? "4px solid lightblue" : ""}` }}
    >
      <div
        className={styles.top}
        style={{ color: `${isOpen ? "lightblue" : ""}` }}
      >
        <p className={styles.number}>{num}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.sign}>{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <hr />}

      {isOpen && <p className={styles.content}>{content}</p>}
    </div>
  );
}

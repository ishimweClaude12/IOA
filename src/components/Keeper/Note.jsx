import styles from "./keeper.module.css";
function Note({ id, note, title, del }) {
  return (
    <div className={styles.containerNote}>
      <h1>{title}</h1>
      <p>{note}</p>
      <button className={styles.deleteBtn} onClick={() => del(id)}>
        DELETE
      </button>
    </div>
  );
}

export default Note;

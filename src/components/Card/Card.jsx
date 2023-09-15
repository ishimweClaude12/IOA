import styles from "./card.module.css";

function Card({ name, age, work }) {
  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <h4>Age: {age}</h4>
      <h4>Work: {work}</h4>
    </div>
  );
}

export default Card;

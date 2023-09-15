import styles from "./main.module.css";
import data from "../../db/data";
import Card from "../Card/Card";

function Main() {
  return (
    <div className={styles.grid}>
      {data.map((person) => {
        return (
          <Card
            key={person.id}
            name={person.name}
            age={person.age}
            work={person.work}
          />
        );
      })}
    </div>
  );
}

export default Main;

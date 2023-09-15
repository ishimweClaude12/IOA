import styles from "./todo.module.css";
import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
const ToDo = () => {
  const [arr, setArr] = useState([]);
  const [input, setInput] = useState("");
  function handleChange(e) {
    const { value } = e.target;
    setInput(value);
  }
  function handleClick() {
    setArr((el) => {
      return [...el, input];
    });
  }
  return (
    <div className={styles.container}>
      <div>
        <h1>To-Do List</h1>
      </div>
      <div>
        <input type="text" name="task" id="task" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        <ul>
          {arr.map((li) => {
            return <ListItem key={arr.indexOf(li)} content={li} />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default ToDo;

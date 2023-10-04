import styles from "./todo.module.css";
import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import ClassCounter from "../ClassCounter/ClassCounter";
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
    setInput("");
  }

  return (
    <>
      <h1 style={{ fontSize: "24px", padding: "16px" }}>
        Onether one of my classic little project features. Here is the
        to-do-list. Now you don't have to ever write things you want to do on a
        paper.
      </h1>
      <div className={styles.container}>
        <div>
          <h1>To-Do List</h1>
        </div>
        <div>
          <input
            type="text"
            name="task"
            id="task"
            onChange={handleChange}
            value={input}
          />
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
      <div>
        <ClassCounter />
      </div>
    </>
  );
};
export default ToDo;

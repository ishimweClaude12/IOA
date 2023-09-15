import React, { useState } from "react";

import styles from "./counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);
  function handlePlusClick() {
    setCount(count + 1);
    console.log(count);
  }
  function handleMinusClick() {
    setCount(count - 1);
  }
  return (
    <div className={styles.container}>
      <h1>This is a simple Counter</h1>
      <h2>{count}</h2>
      <button onClick={handlePlusClick}>+</button>
      <button onClick={handleMinusClick}>-</button>
    </div>
  );
}

export default Counter;

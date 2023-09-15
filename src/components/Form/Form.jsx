import React, { useState } from "react";
import styles from "./form.module.css";

function Form() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    age: 0,
    email: "",
  });
  const [isHoverd, setHover] = useState(false);

  function handleClick(e) {
    e.preventDefault();
  }

  function changeStyle() {
    setHover(true);
  }
  function mouseleave() {
    setHover(false);
  }
  function handleChange(e) {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  return (
    <div className={styles.container}>
      <form>
        <h1>Name {userInfo.name}</h1>
        <h1>Email {userInfo.email}</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" Name"
          onChange={handleChange}
        />
        <br></br>
        <input
          type="email"
          name="email"
          id="lName"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          onClick={handleClick}
          style={{
            backgroundColor: isHoverd ? "black" : "lightblue",
            color: isHoverd ? "white" : "black",
          }}
          onMouseOver={changeStyle}
          onMouseLeave={mouseleave}
        />
      </form>
    </div>
  );
}

export default Form;

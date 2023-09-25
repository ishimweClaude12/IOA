import styles from "./accordion.module.css";

import React, { useState } from "react";

export default function Accordion({ num, title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={styles.container}
      onClick={() => setIsOpen((prev) => !prev)}
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

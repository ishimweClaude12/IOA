import Styles from "./keeper.module.css";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Note from "./Note";
export const deleteNote = () => {};
function Keeper() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleClick() {
    setTitle("");
    setContent("");
    setNotes([
      ...notes,
      {
        id: uuidv4(),
        title,
        content,
      },
    ]);
  }
  function handleChange(e) {
    const { value, name } = e.target;
    if (name === "title") setTitle(value);
    if (name === "content") setContent(value);
  }
  function deleteNote(id) {
    console.log("I g t deletes");
    setNotes(notes.filter((note) => note.id !== id));
  }
  return (
    <div>
      <div className={Styles.container}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          className={Styles.input}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="content"
          placeholder="Note content"
          value={content}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className={Styles.btn} onClick={handleClick}>
          Add
        </button>
      </div>
      <div className={Styles.flex}>
        {notes.map((obj) => {
          return (
            <Note
              key={obj.id}
              id={obj.id}
              title={obj.title}
              note={obj.content}
              del={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Keeper;

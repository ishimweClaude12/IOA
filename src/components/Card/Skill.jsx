import React from "react";

export default function Skill({ text, level, bg }) {
  return (
    <>
      <span
        style={{
          backgroundColor: `${bg}`,
          padding: ".4rem",
          borderRadius: "12px",
          fontSize: "10px",
        }}
      >
        {text}{" "}
        <span>
          {level === "beginner" && "🙂"}
          {level === "intermediate" && "🤡"}
          {level === "advanced" && "😎"}
        </span>
      </span>
    </>
  );
}

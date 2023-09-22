import React from "react";

export default function Skill({ text, icon, bg }) {
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
        {text} {icon}
      </span>
    </>
  );
}

import React, { useState } from "react";

export default function P({ children, maxLen, size, padding, bg }) {
  const [isExpanded, setIsExpanded] = useState(false);

  //   const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <p styles={{ backgroundColor: `blue` }}>
      {isExpanded ? (
        <>
          {children}{" "}
          <em
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            Collapse
          </em>
        </>
      ) : (
        <>
          {children.split("").slice(0, maxLen)}...{" "}
          <em
            onClick={() => setIsExpanded((prev) => !prev)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Read More{" "}
          </em>
        </>
      )}
    </p>
  );
}

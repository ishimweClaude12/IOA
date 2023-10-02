import React, { useState } from "react";

export default function P({ children, maxLen, size, padding, bg }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const customStyles = {
    fontSize: `${size}px`,
    padding: `${padding}rem`,
    backgroundColor: `${bg}`,
  };
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
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m8.85 17.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425l-.825 3.575ZM5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22ZM12 13.25Z"
                />
              </svg>
            </span>
          </em>
        </>
      )}
    </p>
  );
}

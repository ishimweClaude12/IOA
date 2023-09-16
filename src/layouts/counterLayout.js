import { Outlet } from "react-router-dom";

import React from "react";

export default function CounterLayout() {
  return (
    <>
      <h1 style={{ fontSize: "24px", padding: "16px" }}>
        In this simple and humble feature of my project. I was learning about
        the useState Hook and tried ot implement this mediocre feature, where
        you can click on a button and the value displayed in a box changes
        respectively.
      </h1>
      <p style={{ fontSize: "18px", padding: "16px" }}>
        All you have to do is click on a plus sign and the value increases by
        one. Likewise, if you click on the minus sign; the value will decrease.
        It might seem easy at first if you are a developer. but if you try and
        implement it while learning react.js for the first time. I promise you,
        it is very difficuly to wrap your head around.
      </p>
      <h3 style={{ fontSize: "20px", padding: "16px" }}>
        Some might think that I am crazy or don't have something important to
        do. Just writting all this crap, even though there is a rolem ipsum to
        write all this boilerplate words for me. But I do believe in the power
        of writing things on your own. This builds my confidence in generating
        some text for my future project.
      </h3>
      <Outlet />
    </>
  );
}

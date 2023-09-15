import { Outlet } from "react-router-dom";

import React from "react";

export default function CounterLayout() {
  return (
    <>
      <h1>
        All you have to do is click on + or - buttons to increase or decrease
        the counter
      </h1>
      <Outlet />
    </>
  );
}

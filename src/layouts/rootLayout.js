import { Outlet } from "react-router-dom";

import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export default function rootLayout() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

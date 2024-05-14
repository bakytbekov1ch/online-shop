import { Outlet } from "react-router";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import React from "react";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

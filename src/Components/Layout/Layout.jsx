import React, { Fragment, useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default Layout;

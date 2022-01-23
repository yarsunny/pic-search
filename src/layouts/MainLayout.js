import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../logo.png";
import AppStatus from "../components/AppStatus";

function MainLayout() {
  return (
    <div className="container mx-auto">
      <img src={logo} className="w-12 h-12 mt-8" alt="pic search" />
      <AppStatus />
      <Outlet />
    </div>
  );
}

export default MainLayout;

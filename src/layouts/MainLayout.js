import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      this is layout
      <Outlet />
    </div>
  );
}

export default MainLayout;

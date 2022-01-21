import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Photo from "./pages/photo/Photo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="photos/:id" element={<Photo />} />
      </Route>
    </Routes>
  );
}

export default App;

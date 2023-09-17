import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Edit from "./page/Edit";
import Create from "./page/Create";
import NavScrollExample from "./components/NavScroll";

export default function App() {
  return (
    <BrowserRouter>
      <NavScrollExample />
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

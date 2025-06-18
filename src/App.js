import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Admin, Trainer } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/trainer" element={<Trainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Admin } from "./pages/index";
import Trainer from "./pages/trainer/dashboard";
import Users from "./pages/trainer/users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/trainer/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

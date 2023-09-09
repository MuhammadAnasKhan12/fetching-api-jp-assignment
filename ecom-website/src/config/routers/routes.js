import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Description from "../../pages/Description";
import Home from "../../pages/Home"
export default function WebRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import AppFun from "./AppFun";
import AppClass from "./AppClass";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppFun />} />
      <Route path="/class" element={<AppClass />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

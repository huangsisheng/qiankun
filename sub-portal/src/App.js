import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Create from "./modules/Create";
import Detail from "./modules/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Create />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )

}
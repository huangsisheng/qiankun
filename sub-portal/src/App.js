import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Create from "./modules/create";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Create />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  )

}
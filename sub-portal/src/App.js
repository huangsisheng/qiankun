import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import routes from "./routes";

const renderRouters = (routers) =>
  routers &&
  routers.map(({ path, element, children }, index) => {
    return (
      <Route key={`${path}${index}`} path={path} element={element}>
        {children && renderRouters(children)}
      </Route>
    );
  });


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRouters(routes)}
      </Routes>
    </BrowserRouter>
  )
}
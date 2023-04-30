import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoutes from "./utils/PrivateRoutes";
import { routes } from "./routes";
import "./App.css";

const App = () => {
  return (
    <div className="App ">
      <Routes>
        <Route element={<PrivateRoutes />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
          <Route path="*" element={<Home />} />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </div>
  );
};

export default App;

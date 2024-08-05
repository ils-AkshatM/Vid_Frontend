import React from "react";
import { Route, Routes } from "react-router-dom";
import * as routes from "./routes";
import Login from "../pages/Auth/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register/Register";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME_ENDPOINT} element={<Home />} />
        <Route path={routes.LOGIN_ENDPOINT} element={<Login />} />
        <Route path={routes.REGISTER_ENDPOINT} element={<Register />} />

        <Route path="*" element={<>not found</>} />
      </Routes>
    </div>
  );
};

export default Routers;

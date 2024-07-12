import React from 'react'
import { Route, Routes } from "react-router-dom";
import * as routes from "./routes";

const Routers = () => {
  return (
    <div>
        <Routes>
        <Route path={routes.LOGIN_ENDPOINT} element={"<Login />"} />

        <Route path='*' element={<>not found</>} />
        </Routes>
    </div>
  )
}

export default Routers
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/LandingPage/Landing";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
      </Routes>
    </>
  );
};

export default Router;

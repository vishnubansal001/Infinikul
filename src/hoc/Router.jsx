import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../pages/LandingPage/Landing";
import SignUp from "../pages/SignUpPage/SignUp";
import Courses from "../pages/CoursesPage/Courses";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
        <Route exact path="/courses" element={<Courses />}></Route>
      </Routes>
    </>
  );
};

export default Router;

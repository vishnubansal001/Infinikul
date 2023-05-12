import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Global = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Global;

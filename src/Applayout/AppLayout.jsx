import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header"
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div style={{ paddingBottom: '30px' }}> 
    <Header/>    
      <Outlet />
      <Footer />
    </div>
  );
};

export default Applayout;
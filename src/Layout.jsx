import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      
      <Outlet />
      

      <Footer/>
    </>
  );
}

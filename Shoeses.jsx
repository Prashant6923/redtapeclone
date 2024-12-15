import React from "react";
import Navbar from "../components/Navbar";
import Shoes from "../components/Shoes";
import Footer from "../components/Footer";
import list from "../../public/list.json";



function Shoeses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Shoes />
      </div>
      <Footer />
    </>
  );
}

export default Shoeses;
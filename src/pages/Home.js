import React from "react";
import Basic from "../components/basic/Basic";
import Cards from "../components/cards/Cards";
import Footer from "../components/footer/Footer";
import "./../styles/App.css";

const Home = () => {
  return (
    <>
      <Basic />
      <Cards/>
      <Footer />
    </>
  );
};

export default Home;

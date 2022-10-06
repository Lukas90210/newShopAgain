import React from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import Header from "../../components/Home/Header";
import Cards from "../../components/Home/Cards/Cards";
import Newsletter from "../../components/Home/Newsletter/Newsletter";
import Featured from "../../components/Home/Featured/Featured";
import Footer from "../../components/Home/Footer/Footer";

const Home = () => (
  <>
    <Navbar />
    <Header />
    <Cards />
    <Newsletter />
    <Featured />
    <Footer />
  </>
);

export default Home;

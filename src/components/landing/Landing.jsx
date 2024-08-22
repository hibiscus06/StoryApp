import React from "react";
import Navbar from "../navbar/Navbar";
import Block1 from "./Block1";
import About from "./About";
import Testimonials from "./Testimonials";
import Footer from "../footer/Footer";
import ReadingRoom from "./ReadingRoom";

const Landing = () => {
  return (
    <>
      <Navbar />

      <Block1 />
      <About />
      <ReadingRoom />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;

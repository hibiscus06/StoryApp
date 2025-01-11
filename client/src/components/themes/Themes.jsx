import React from "react";
import Navbar from "../navbar/Navbar";
import Themecard from "./Themecard";
import PromptCard from "./PromptCard";
import saturn from "../../assets/3.jpg";
import cottage from "../../assets/mushroom.jpg";
import cloud from "../../assets/cloud.jpg";
import Footer from "../footer/Footer";

const Themes = () => {
  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden z-10 my-10 flex flex-row justify-between">
        <div className="absolute translate-x-[-50%] -left-10 -z-10 opacity-65">
          <img src={saturn} alt="saturn" />
        </div>
        <div className="absolute translate-x-[30%] bottom-0 right-0 -z-10 opacity-65">
          <img src={cottage} alt="saturn" />
        </div>
        <div className="absolute translate-y-[-18%] translate-x-[10%] h-[30rem] w-[30rem] right-0 -z-10">
          <img src={cloud} alt="saturn" />
        </div>
        <Themecard />
        <PromptCard />
      </div>
      <Footer />
    </>
  );
};

export default Themes;

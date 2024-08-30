import React from "react";
import ThemesDisplay from "./ThemesDisplay";
import Navbar from "../navbar/Navbar";
import StoryCard from "./StoryCard";
import Footer from "../footer/Footer";

const Discover = () => {
  return (
    <>
      <Navbar />
      <ThemesDisplay />
      <div className="">
        <div className="flex flex-row justify-evenly items-center">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
        <div className="flex flex-row justify-evenly items-center">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
        <div className="flex flex-row justify-evenly items-center">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discover;

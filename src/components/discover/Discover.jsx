import React from "react";
import ThemesDisplay from "./ThemesDisplay";
import Navbar from "../navbar/Navbar";
import StoryCard from "./StoryCard";
import Footer from "../footer/Footer";

const Discover = () => {
  return (
    <>
      <div>
        <Navbar />
        <ThemesDisplay />
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
      <div className="flex flex-row justify-evenly items-center">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
      <Footer />
    </>
  );
};

export default Discover;

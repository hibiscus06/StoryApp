import React from "react";
import ThemesDisplay from "./ThemesDisplay";
import Navbar from "../navbar/Navbar";
import StoryCard from "./StoryCard";
import Footer from "../footer/Footer";
import ScrollingBackground from "./BoatMoving";

const Discover = () => {
  return (
    <>
      <Navbar />
      <ScrollingBackground />
      <ThemesDisplay />
      <div className="">
        <div></div>
        <div className="flex flex-row flex-wrap justify-evenly items-center">
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </div>
    </>
  );
};

export default Discover;

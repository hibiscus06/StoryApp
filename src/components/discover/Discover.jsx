import React, { useState } from "react";
import ThemesDisplay from "./ThemesDisplay";
import Navbar from "../navbar/Navbar";
import StoryCard from "./StoryCard";
import Footer from "../footer/Footer";
import ScrollingBackground from "./BoatMoving";

const Discover = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <>
      <Navbar />
      <ScrollingBackground />
      <ThemesDisplay />
      {/*Themes  */}
      <div className="rounded-lg p-[2rem] flex flex-col items-center justify-center">
        <button
          className="text-white bg-custom-copper font-bold text-[1.2rem] border-none rounded h-[3rem] w-[9rem]"
          onClick={() => handleDropdown()}
        >
          Select Theme
        </button>
        <div
          className={`overflow-y-scroll flex flex-col mt-[2vh] w-[9rem] font-bold text-custom-lightBlue font-serif active:transition-transform transition-all duration-300 ease-in-out ${
            dropdown ? "h-[17vh] opacity-100" : "h-0 opacity-0"
          }`}
          style={{ transitionProperty: "height, opacity" }}
        >
          <button className="hover:text-custom-darkBlue">Thriller</button>
          <button className="hover:text-custom-darkBlue">Murder</button>
          <button className="hover:text-custom-darkBlue">Horror</button>
          <button className="hover:text-custom-darkBlue">Sci-fi</button>
          <button className="hover:text-custom-darkBlue">Romance</button>
          <button className="hover:text-custom-darkBlue">Thriller</button>
          <button className="hover:text-custom-darkBlue">Murder</button>
          <button className="hover:text-custom-darkBlue">Horror</button>
          <button className="hover:text-custom-darkBlue">Sci-fi</button>
          <button className="hover:text-custom-darkBlue">Romance</button>
        </div>
      </div>
      <div className="">
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
      <Footer />
    </>
  );
};

export default Discover;

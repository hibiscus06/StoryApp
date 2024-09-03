import React, { useState } from "react";
import StoryCard from "./StoryCard";
import bulb from "../../assets/bulb.png";
import lighted from "../../assets/lightedBulb.png";

const ThemesDisplay = () => {
  const [dropdown, setDropdown] = useState(false);
  console.log(dropdown);

  const handleDropdown = () => {
    setDropdown(!dropdown);
    console.log(dropdown);
  };

  return (
    <>
      <div className="flex flex-col justify-evenly font-serif items-center">
        {/* Message */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mt-[1rem]">
            <p className="text-[4rem] text-custom-darkBlue">
              Get inspired to pen down
              <br /> your next masterpiece! Let your words flow.
            </p>
          </div>
        </div>

        {/*Themes  */}
        <div className="rounded-lg p-[2vh] ">
          <button
            className="text-white bg-custom-copper font-bold text-[1.2rem] border-none rounded h-[6vh] w-[10vw]"
            onClick={() => handleDropdown()}
          >
            Select Theme
          </button>
          {dropdown ? (
            <div className="overflow-y-scroll h-[17vh] flex flex-col mt-[2vh]">
              <button>Thriller</button>
              <button>Murder mystery</button>
              <button>Horror</button>
              <button>Sci-fi</button>
              <button>Romance</button>
              <button>Thriller</button>
              <button>Murder mystery</button>
              <button>Horror</button>
              <button>Sci-fi</button>
              <button>Romance</button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ThemesDisplay;

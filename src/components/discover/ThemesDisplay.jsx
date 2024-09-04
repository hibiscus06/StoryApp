import React from "react";

const ThemesDisplay = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly font-serif items-center z-10 relative bg-custom-lightBlue">
        {/* Message */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="mt-[1rem]">
            <p className="text-[4rem] text-white">
              Get inspired to pen down
              <br /> your next masterpiece!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemesDisplay;

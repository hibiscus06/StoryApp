import React, { useState, useEffect } from "react";
import ship from "../../assets/shipNobg.png";

const ScrollingBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="section bg-static relative max-w-3xl min-h-[75vh] p-10 bg-cover bg-center z-10">
        {/* <p className="text-[4rem] text-custom-darkBlue ">
          Get inspired to pen down
          <br /> your next masterpiece! Let your words flow.
        </p> */}

        <div
          className="bg-move absolute top-0 bottom-0 w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${ship})`,
            left: `${scrollPosition}px`,
          }}
        ></div>
      </div>
      {/* <div className="section bg-teal-500 text-white max-w-3xl min-h-[75vh] p-10 mx-auto">
        The boat image is moving only when scrolling.
      </div> */}
    </div>
  );
};

export default ScrollingBackground;

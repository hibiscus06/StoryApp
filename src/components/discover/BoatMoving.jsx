import React, { useState, useEffect } from "react";
import ship from "../../assets/pirateShip.jpg";

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
    <>
      <div className="overflow-hidden">
        <p className="text-[4.8rem] text-custom-darkBlue font-serif relative float-end pr-[2rem] pt-[1rem]">
          Let your <br />
          words flow.
        </p>
        <div className="section bg-static relative max-w-3xl min-h-[85vh] bg-cover bg-center">
          <div
            className="bg-move absolute top-0 bottom-0 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${ship})`,
              left: `${scrollPosition}px`,
            }}
          ></div>
        </div>

        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute inset-y-[14rem] w-full h-full bottom-0"
          >
            <path
              fill="#4c3e54"
              fill-opacity="1"
              d="M0,160L30,170.7C60,181,120,203,180,202.7C240,203,300,181,360,186.7C420,192,480,224,540,213.3C600,203,660,149,720,154.7C780,160,840,224,900,213.3C960,203,1020,117,1080,85.3C1140,53,1200,75,1260,101.3C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ScrollingBackground;

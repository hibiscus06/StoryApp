import React, { useEffect, useRef } from "react";
import img from "../../assets/door.jpeg";
import theme from "../../assets/castle1.png";
import dis from "../../assets/discussing.png";
import write from "../../assets/write.png";
import { Typography, Button } from "@material-tailwind/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ReadingRoom = () => {
  const parallaxRefs = useRef([]);

  // Add refs to an array
  parallaxRefs.current = [];

  const addToRefs = (el) => {
    if (el && !parallaxRefs.current.includes(el)) {
      parallaxRefs.current.push(el);
    }
  };

  useEffect(() => {
    parallaxRefs.current.forEach((section) => {
      const image = section.querySelector(".parallax-image");

      gsap.to(image, {
        yPercent: -20, // Adjust the value for parallax speed
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="mt-[5rem]">
      {/* Section 1 */}
      <div
        className="relative w-full overflow-hidden min-h-screen"
        ref={addToRefs}
      >
        <img
          src={theme}
          alt="image 1"
          className="parallax-image absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-custom-lightBlue/65">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Discover various themes
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts, as for that subtle something, that quality of
              air that emanation from old trees, that so wonderfully changes and
              renews a weary spirit.
            </Typography>
            <Button size="lg" color="white" variant="gradient">
              Explore
            </Button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="relative w-full overflow-hidden min-h-screen"
        ref={addToRefs}
      >
        <img
          src={dis}
          alt="image 2"
          className="parallax-image absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-custom-lightBlue/60">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Get inspired
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts, as for that subtle something, that quality of
              air that emanation from old trees, that so wonderfully changes and
              renews a weary spirit.
            </Typography>
            <Button size="lg" color="white">
              Explore
            </Button>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="relative w-full overflow-hidden min-h-screen"
        ref={addToRefs}
      >
        <img
          src={write}
          alt="image 3"
          className="parallax-image absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-custom-lightBlue/60">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Pen down
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men's hearts, as for that subtle something, that quality of
              air that emanation from old trees, that so wonderfully changes and
              renews a weary spirit.
            </Typography>
            <Button size="lg" color="white">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingRoom;

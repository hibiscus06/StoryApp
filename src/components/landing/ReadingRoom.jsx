import React from "react";
import img from "../../assets/door.jpeg";
import theme from "../../assets/castle1.png";
import dis from "../../assets/discussing.png";
import write from "../../assets/write.png";

import { Carousel, Typography, Button } from "@material-tailwind/react";

const ReadingRoom = () => {
  return (
    <>
      <div className="flex flex-row justify-center mt-[5rem]">
        <Carousel className="rounded-md h-[80vh] w-[60vw]">
          <div className="relative h-full w-full">
            <img
              src={theme}
              alt="image 1"
              className="h-full w-full object-cover"
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
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex justify-center gap-2">
                  <Button size="lg" color="white" variant="gradient">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={dis}
              alt="image 2"
              className="h-full w-full object-cover"
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
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={write}
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-custom-lightBlue/60">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
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
                  upon men&apos;s hearts, as for that subtle something, that
                  quality of air that emanation from old trees, that so
                  wonderfully changes and renews a weary spirit.
                </Typography>
                <div className="flex">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default ReadingRoom;

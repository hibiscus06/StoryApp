import React from "react";
import img from "../../assets/womanWrite.png";
import frame from "../../assets/frame.png";

const About = () => {
  return (
    <div className="bg-custom-copper text-white flex flex-col items-center justify-center py-10 mt-10 h-[50rem]">
      <div className="flex flex-row justify-evenly items-center w-3/4">
        <div className="">
          <p className="text-[5rem] font-serif">
            Built by writers, run <br />
            by writers, owned <br /> by writers
          </p>
          <p className="text-[1.3rem] pt-5 font-serif">
            Novlr is the only creative writing platform to be <br />
            owned by the writers who use it. Join our community
            <br /> of writer-owners, co-own the platform you use, and <br />
            help shape the future of creative writing.
          </p>
          <button className="mt-[3rem] p-3 shadow-2xl drop-shadow-2xl shadow-black rounded-md bg-custom-lightGray text-custom-copper hover:bg-custom-lightBlue hover:text-white hover:transition duration-300 ease-in-out">
            <p className="text-[1.2rem] font-bold">Tell me more!</p>
          </button>
        </div>
        <div className="relative">
          <img className="h-[40rem]" src={frame} />
          <img
            className="py-10 absolute top-[0.4rem] left-[2.4rem] h-[38.35rem]"
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

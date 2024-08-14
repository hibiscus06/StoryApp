import React from "react";
import img from "../../assets/person.jpeg";

const About = () => {
  return (
    <div className="bg-custom-darkBlue text-gray-300 flex flex-col items-center py-10 mt-10 ">
      <div className="flex flex-row justify-evenly items-center w-3/4">
        <div className="m">
          <p className="text-6xl">
            Built by writers, run <br />
            by writers, owned <br /> by writers
          </p>
          <p className="text-xl pt-5">
            Novlr is the only creative writing platform to be <br />
            owned by the writers who use it. Join our community
            <br /> of writer-owners, co-own the platform you use, and <br />
            help shape the future of creative writing.
          </p>
        </div>
        <div>
          <img className="py-10" src={img} />
        </div>
      </div>

      <button className="p-3 shadow-2xl drop-shadow-2xl shadow-black rounded-md bg-custom-lightGray text-custom-mediumBlue hover:bg-custom-lightBlue hover:text-white hover:transition-all">
        <p className="text-xl font-bold">Tell me more!</p>
      </button>
    </div>
  );
};

export default About;

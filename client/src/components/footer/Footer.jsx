import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="h-[30vh] bg-custom-darkBlue/10 flex flex-row justify-evenly items-center font-serif">
          <div>
            <p className="text-[2rem] text-custom-darkBlue mb-4">
              Ready to get writing?
            </p>
            <button className="bg-custom-lightBlue h-[2.7rem] w-[10rem] rounded-md drop-shadow-xl hover:drop-shadow-xl hover:shadow-lg hover:transition-shadow duration-300">
              <p className="text-[1.1rem] text-white">
                Way to creativity <i className="fa-solid fa-arrow-right"></i>
              </p>
            </button>
          </div>

          <div className="w-[30vw]">
            <div className="flex flex-row justify-evenly text-custom-darkBlue pb-[5vh]">
              <div>
                <p className="font-bold">Product</p>
                <p>Writing Studio</p>
                <p>Roadmap</p>
                <p>What's new</p>
              </div>
              <div>
                <p className="font-bold">Product</p>
                <p>Writing Studio</p>
                <p>Roadmap</p>
                <p>What's new</p>
              </div>
              <div>
                <p className="font-bold">Contact</p>
                <p>Writing </p>
                <p>Roadmap</p>
                <p>What's new</p>
              </div>
            </div>
            <div className="flex flex-row gap-x-6 justify-center">
              <i className="fa-brands fa-instagram fa-xl text-custom-darkBlue hover:text-custom-lightBlue"></i>
              <i className="fa-brands fa-facebook fa-xl text-custom-darkBlue hover:text-custom-lightBlue"></i>
              <i className="fa-brands fa-twitter fa-xl text-custom-darkBlue hover:text-custom-lightBlue"></i>
              <i className="fa-brands fa-tumblr fa-xl text-custom-darkBlue hover:text-custom-lightBlue"></i>
            </div>
          </div>
        </div>

        <div className="bg-custom-lightBlue flex flex-row justify-evenly items-center h-[6vh]">
          <div className="text-white">
            <p>@All Rights Reserved.</p>
          </div>
          <div className="flex flex-row justify-evenly w-[30vw] text-white">
            <div className="">
              <p className="cursor-pointer hover:text-gray-400">
                Terms of Service
              </p>
            </div>
            <div>
              <p className="cursor-pointer hover:text-gray-400">
                Privacy Policy
              </p>
            </div>
            <div>
              <p className="cursor-pointer hover:text-gray-400">Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="flex flex-row justify-evenly items-center bg-custom-lightBlue text-white p-4 text-lg sticky top-0 z-30 font-serif">
        <Link to="/">
          <div>logo</div>
        </Link>
        <div className="ml-[10vw]">
          <ul class="flex space-x-4 text-[1.2rem] ">
            <Link to="/discover">
              <li>
                <p className="hover:text-custom-lightGray">Discover</p>
              </li>
            </Link>

            <Link to="/themes">
              <li>
                <p className="hover:text-custom-lightGray">Themes</p>
              </li>
            </Link>

            <Link to="/dashboard">
              <li>
                <p className="hover:text-custom-lightGray">Dashboard</p>
              </li>
            </Link>

            <Link to="about">
              <li>
                <p className="hover:text-custom-lightGray">About</p>
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-row justify-evenly">
          <Link to="/login">
            <button className="mr-5 bg-custom-darkBlue rounded-lg font-bold h-10 w-20 hover:shadow-lg hover:drop-shadow-lg hover:transition-shadow duration-300 ease-in-out">
              <p className="text-lg ">Login</p>
            </button>
          </Link>
          <button className="bg-custom-darkBlue rounded-lg font-bold h-10 w-20 hover:shadow-lg hover:drop-shadow-2xl hover:transition-shadow duration-300 ease-in-out">
            <p className="text-lg ">Signup</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

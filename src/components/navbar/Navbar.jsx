import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="flex flex-row justify-evenly items-center bg-custom-lightBlue text-white p-4 text-lg sticky top-0 z-10 font-serif">
        <Link to="/">
          <div>logo</div>
        </Link>
        <div className="ml-[10vw]">
          <ul class="flex space-x-4 text-[1.2rem] ">
            <Link to="/discover">
              <li>
                <a href="#" class="hover:text-custom-lightGray">
                  Discover
                </a>
              </li>
            </Link>

            <Link to="/themes">
              <li>
                <a href="#" class="hover:text-white">
                  Themes
                </a>
              </li>
            </Link>

            <Link to="/dashboard">
              <li>
                <a href="#" class="hover:text-white">
                  Dashboard
                </a>
              </li>
            </Link>

            <Link to="about">
              <li>
                <a href="#" class="hover:text-white">
                  About
                </a>
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-row justify-evenly">
          <Link to="/login">
            <button className="mr-5 bg-custom-darkBlue rounded-lg font-bold h-10 w-20 hover:shadow-lg hover:drop-shadow-lg">
              <p className="text-lg ">Login</p>
            </button>
          </Link>
          <button className="bg-custom-darkBlue rounded-lg font-bold h-10 w-20 hover:shadow-lg hover:drop-shadow-lg">
            <p className="text-lg ">Signup</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

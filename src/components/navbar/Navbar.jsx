import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="flex flex-row justify-evenly bg-custom-lightBlue text-custom-darkBlue p-4 text-lg sticky top-0 z-10">
        <div>logo</div>
        <div className="ml-[10vw]">
          <ul class="flex space-x-4 text-xl ">
            <li>
              <a href="#" class="hover:text-white">
                Discover
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Themes
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="hover:text-white">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row justify-evenly">
          <Link to="/login">
            <button className="border border-custom-lightGray mr-5 bg-custom-lightGray rounded-lg font-bold h-10 w-20 hover:shadow-custom-mediumBlue hover:shadow-lg">
              <p className="text-lg ">Login</p>
            </button>
          </Link>
          <button className="border border-custom-lightGray bg-custom-lightGray rounded-lg font-bold h-10 w-20 hover:shadow-custom-mediumBlue hover:shadow-lg">
            <p className="text-lg ">Signup</p>
          </button>
        </div>
      </div>
    </>
  );
  ``;
};

export default Navbar;

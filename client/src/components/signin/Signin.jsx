import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center border text-white m-5 p-5 h-[35rem] w-[30rem] rounded-lg border-custom-darkBlue shadow-lg bg-custom-lightBlue">
          <p className="text-[3rem] text-white font-serif my-[1rem]">
            Login to explore
          </p>
          <form className="font-serif text-white flex flex-col">
            <div>
              <label for="email">Email</label>
              <br></br>
              <input
                className="border rounded-lg p-[0.4rem] text-custom-darkBlue mb-[1rem]"
                type="email"
                id="email"
                name="email"
              />
              <br></br>
            </div>

            <div>
              <label className="" for="password">
                Password
              </label>
              <br></br>
              <input
                className="border rounded-lg p-[0.4rem] text-custom-darkBlue mb-[1rem]"
                type="password"
                id="password"
                name="password"
              />
              <p className="text-gray-400 hover:text-white">
                Forgot your password?
              </p>
              <br></br>
            </div>

            <input
              className="border p-[0.4rem] text-white rounded-2xl hover:text-custom-darkBlue hover:bg-white"
              type="submit"
            />
          </form>

          <div className="my-[1rem] text-[1.2rem] text-center">
            <p>Not Registered yet?</p>
            <Link
              to="/register"
              className="active:text-custom-copper hover:text-custom-copper"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

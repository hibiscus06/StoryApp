import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center border text-white m-5 p-5 h-[35rem] w-[30rem] rounded-lg border-custom-darkBlue shadow-lg bg-custom-lightBlue font-serif">
          <p className="text-[2.8rem] text-white font-serif">
            Welcome to storyApp
          </p>
          <p className="mb-[1rem] text-[1.2rem]">
            Where imagination meets reality
          </p>

          <form className="font-serif text-white flex flex-col">
            <div>
              <label for="name">Fullname</label>
              <br></br>
              <input
                className="border rounded-lg p-[0.4rem] text-custom-darkBlue mb-[1rem]"
                type="text"
                id="text"
                name="fullname"
              />
              <br></br>
            </div>

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
              <br></br>
            </div>

            <input
              className="border p-[0.4rem] text-white rounded-2xl hover:text-custom-darkBlue hover:bg-white"
              type="submit"
            />
          </form>

          <div className="my-[1rem] text-[1.2rem] text-center">
            <p>Already Registered ?</p>
            <Link
              to="/login"
              className="active:text-custom-copper hover:text-custom-copper"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

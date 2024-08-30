import React from "react";
import Navbar from "../navbar/Navbar";
import Themecard from "./Themecard";
import PromptCard from "./PromptCard";

const Themes = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-evenly mt-[10vh]">
        <div className="w-[15.625vw] h-[70vh] overflow-y-scroll p-[1rem]">
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
          <Themecard />
        </div>

        <PromptCard />
      </div>
    </>
  );
};

export default Themes;

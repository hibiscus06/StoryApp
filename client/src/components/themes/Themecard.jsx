import React, { useState } from "react";

const Themecard = () => {
  const data = [
    "Horror",
    "Thriller",
    "Sci-fi",
    "Romance",
    "Pirates",
    "Murder",
    "Horror",
    "Thriller",
    "Sci-fi",
    "Romance",
    "Pirates",
    "Murder",
    "Thriller",
    "Sci-fi",
    "Romance",
    "Pirates",
    "Murder",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col items-center m-5">
      <h1 className="font-serif text-[4rem] text-custom-lightBlue">Themes</h1>
      <div className="flex flex-wrap mx-[2rem] p-[2rem] justify-evenly rounded cursor-pointer">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`flex border-2 rounded h-[4rem] w-[12rem] m-[1rem] p-[1rem] justify-center items-center font-serif text-[1.5rem] font-semibold duration-500 ease-in-out ${
              selectedIndex === index
                ? index % 2 === 0
                  ? "bg-custom-copper text-white"
                  : "bg-custom-darkBlue text-white"
                : index % 2 === 0
                ? "bg-custom-lightGray border-custom-copper hover:bg-custom-copper hover:text-white hover:shadow-[3px_2px_5px_2px_rgba(0,0,0,0.1)]"
                : "border-custom-darkBlue hover:bg-custom-darkBlue hover:text-white hover:shadow-[3px_2px_10px_4px_rgba(0,0,0,0.1)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Themecard;

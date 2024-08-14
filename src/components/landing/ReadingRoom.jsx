import React from "react";
import img from "../../assets/door.jpeg";

const ReadingRoom = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly font-serif mx-[30vh] my-20">
        <div>
          <p className="text-6xl text-custom-darkBlue pb-7">
            The Reading <br />
            Room.
          </p>
          <img className="h-[60vh]" src={img} />
        </div>

        <div className="flex flex-col items-center space-y-5 mt-[16vh]">
          <div className="hover:transition-all border rounded-md p-3 bg-custom-lightGray hover:bg-gray-300 drop-shadow-xl">
            <p className="text-center text-xl text-custom-mediumBlue font-bold ">
              Themes
            </p>

            <ul className="text-lg">
              <li>Explore themes for your next masterpiece</li>
              <li>Never get short of ideas on our platform</li>
              <lil>Give a boost to yout creativity </lil>
            </ul>
          </div>
          <div className="border rounded-md p-3 bg-custom-lightGray hover:bg-gray-300 drop-shadow-xl">
            <p className="text-center text-xl text-custom-mediumBlue font-bold">
              Get inspired
            </p>
            <ul className="text-lg">
              <li>Explore themes for your next masterpiece</li>
              <li>Never get short of ideas on our platform</li>
              <lil>Give a boost to yout creativity </lil>
            </ul>
          </div>
          <div className="border rounded-md p-3 bg-custom-lightGray hover:bg-gray-300 drop-shadow-xl">
            <p className="text-center text-xl text-custom-mediumBlue font-bold">
              Pen Down
            </p>
            <ul className="text-lg">
              <li>Explore themes for your next masterpiece</li>
              <li>Never get short of ideas on our platform</li>
              <lil>Give a boost to yout creativity </lil>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadingRoom;

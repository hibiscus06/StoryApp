import React from "react";

const StoryCard = () => {
  return (
    <>
      <div className="border-t-4 border-custom-lightBlue h-[40vh] w-[20vw] rounded-lg p-[0.7rem] mt-[1rem] font-serif hover:shadow-md hover:drop-shadow-lg">
        <p className="text-[2rem]">A Tale of two cities and other stories</p>
        <p className="text-[0.9rem] text-gray-500 italic">Autor Name</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam
          nisi nostrum ut dolor asperiores porro? Voluptates quis placeat sequi
          reiciendis, pariatur, quasi at quo totam, quos officia molestias
          laudantium?
        </p>
      </div>
    </>
  );
};

export default StoryCard;

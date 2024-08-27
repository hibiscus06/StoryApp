import React from "react";

const Block1 = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[5vh] font-serif mx-20">
      <div className="flex flex-col justify-center items-center my-20">
        <p className="text-5xl text-custom-darkBlue">
          The workspace for creative writers.
        </p>
        <p className="text-xl text-gray-500 text-center my-10">
          Built by writers, for writers, Logo is the world’s only writer-owned
          <br />
          creative writing platform. Join a community with writers and
          <br /> their goals at the heart of everything we do.
        </p>
        <button className="bg-custom-darkBlue h-[7vh] w-[22vh] rounded-md hover:shadow-lg ">
          <p className="text-[1rem] text-white">
            Way to creativity <i className="fa-solid fa-arrow-right"></i>
          </p>
        </button>
      </div>

      <div className="border-2 border-custom-lightGray mx-[30vh] text-gray-500">
        <p className="text-[1rem] py-2 text-center ">The Escape Route</p>
        <div className="border border-custom-lightGray mx-8"></div>
        <article className="p-5 text-[1rem] overflow-y-scroll h-[50vh] w-[60vw]">
          "Jenny!" Leo ripped the heavy, metal door back.
          <br />
          <br /> My spine stiffened like the hair on a cornered dog. I wondered
          what it would be this time. Coolers need stocking, Jenny. Jenny, we're
          almost completely out of forks. Another Code Brown all over the
          ladies' room. Where's Jenny? <br />
          Sometimes I hated this tourist trap so much. I longed for September.
          For crisp afternoons, walking with Paul, turning the day's complaints
          into jokes and talking about Our Big Plans. But high school was over
          now.
          <br /> So were me and Paul. <br />
          Leo's gaze met mine through the frosty air, and I hoped the
          hopelessness wasn't showing on my face. Restaurants were like the
          jungle: no place for the weak. <br />
          <br />
          For once, Leo's eyes weren't critical, though. Instead something wild
          shone in their depths. <br />
          "You better come see this." <br />
          The Front of House was empty. Leo flung the wooden door open and
          stepped into a hazy fuchsia glow. I scanned the old-fashioned ships,
          the wind-battered sea. <br />
          <br />
          "Look up."
          <br /> I did. <br />
          <br /> Two, four, five man'o'wars floating in the air with the
          seagulls. <br />
          What could… <br />
          "Nobody knows," Leo said, almost gently. <br />
          "But it's happening other places, too. Other animals. All coming down
          from the sky."
        </article>
      </div>
    </div>
  );
};

export default Block1;

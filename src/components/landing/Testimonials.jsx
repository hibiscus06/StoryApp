import React from "react";
import img1 from "../../assets/testimonials1.png";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly">
        <div className="text-center flex flex-col items-center justify-center px-4 rounded-lg w-[22%] h-[45vh] shadow-xl shadow-gray-500 bg-gray-100">
          <img className="rounded-full pb-4" src={img1} />
          <p className="">
            "Really impressed with the super clean interface on @novlrtweets as
            I take it for a test run in preparation for #NaNoWriMo. So far, it's
            totally blowing all the years I've squabbled with Microsoft Word out
            of the water. Even having a nice note section is amazing"
          </p>
          <p className="pt-2 text-custom-lightBlue ">@user1</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center px-4 rounded-lg w-[22%] h-[45vh] shadow-xl shadow-gray-500 bg-gray-100">
          <img className="rounded-full pb-4" src={img1} />
          <p className="">
            "Really impressed with the super clean interface on @novlrtweets as
            I take it for a test run in preparation for #NaNoWriMo. So far, it's
            totally blowing all the years I've squabbled with Microsoft Word out
            of the water. Even having a nice note section is amazing"
          </p>
          <p className="pt-2 text-custom-lightBlue ">@user1</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center px-4 rounded-lg w-[22%] h-[45vh] shadow-xl shadow-gray-500 bg-gray-100">
          <img className="rounded-full pb-4" src={img1} />
          <p className="">
            "Really impressed with the super clean interface on @novlrtweets as
            I take it for a test run in preparation for #NaNoWriMo. So far, it's
            totally blowing all the years I've squabbled with Microsoft Word out
            of the water. Even having a nice note section is amazing"
          </p>
          <p className="pt-2 text-custom-lightBlue ">@user1</p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

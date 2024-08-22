import React from "react";
import img1 from "../../assets/testimonials1.png";

const Testimonials = () => {
  return (
    <>
      <div className="mb-[10vh]">
        <div className="my-10 text-center">
          <p className="text-[3rem] text-custom-darkBlue">
            More than a writing app
          </p>
          <p className="text-[1.5rem] text-gray-600">
            See what others have to say!
          </p>
        </div>
        <div className="flex flex-row items-center justify-evenly">
          <div className="text-center flex flex-col items-center justify-center px-4 rounded-lg w-[22vw] h-[55vh] shadow-xl shadow-gray-500 ">
            <img className="rounded-full pb-4" src={img1} />
            <p className="">
              "Really impressed with the super clean interface on @novlrtweets
              as I take it for a test run in preparation for #NaNoWriMo. So far,
              it's totally blowing all the years I've squabbled with Microsoft
              Word out of the water. Even having a nice note section is amazing"
            </p>
            <p className="pt-2 text-custom-lightBlue ">@user1</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center px-4 rounded-lg w-[22%] h-[55vh] shadow-xl shadow-gray-500 ">
            <img className="rounded-full pb-4" src={img1} />
            <p className="">
              "Really impressed with the super clean interface on @novlrtweets
              as I take it for a test run in preparation for #NaNoWriMo. So far,
              it's totally blowing all the years I've squabbled with Microsoft
              Word out of the water. Even having a nice note section is amazing"
            </p>
            <p className="pt-2 text-custom-lightBlue ">@user1</p>
          </div>
          <div className="text-center flex flex-col items-center justify-center px-4 rounded-lg w-[22%] h-[55vh] shadow-xl shadow-gray-500 ">
            <img className="rounded-full pb-4" src={img1} />
            <p className="">
              "Really impressed with the super clean interface on @novlrtweets
              as I take it for a test run in preparation for #NaNoWriMo. So far,
              it's totally blowing all the years I've squabbled with Microsoft
              Word out of the water. Even having a nice note section is amazing"
            </p>
            <p className="pt-2 text-custom-lightBlue ">@user1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

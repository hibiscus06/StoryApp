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
          <div className="text-center flex flex-col items-center justify-center rounded-lg p-2 w-[22vw] h-[55vh] shadow-md drop-shadow-md hover:shadow-lg hover:drop-shadow-xl">
            <img className="rounded-full pb-4" src={img1} />

            <div className="bg-custom-darkBlue border-t-2 border-b-2 border-custom-darkBlue rounded-t-3xl rounded-b-xl h-[100%] w-[100%] flex flex-col justify-center items-center">
              <p className="px-4 text-white">
                "Really impressed with the super clean interface on @novlrtweets
                as I take it for a test run in preparation for #NaNoWriMo. So
                far, it's totally blowing all the years I've squabbled with
                Microsoft Word out of the water. Even having a nice note section
                is amazing"
              </p>
              <p className="pt-2 pb-2 text-white">@user1</p>
            </div>
          </div>
          <div className="text-center flex flex-col items-center justify-center rounded-lg w-[22vw] h-[55vh]">
            <img className="rounded-full pb-4" src={img1} />
            <div className="border-t-2 border-custom-darkBlue rounded-t-full h-[100%] w-[100%] bg-custom-darkBlue"></div>
            <div className="bg-custom-darkBlue">
              <p className="px-4 text-white">
                "Really impressed with the super clean interface on @novlrtweets
                as I take it for a test run in preparation for #NaNoWriMo. So
                far, it's totally blowing all the years I've squabbled with
                Microsoft Word out of the water. Even having a nice note section
                is amazing"
              </p>
              <p className="pt-2 pb-2 text-white">@user1</p>
            </div>
          </div>
          <div className="text-center flex flex-col items-center justify-center rounded-lg w-[22vw] h-[55vh]">
            <img className="rounded-full pb-4" src={img1} />
            <div className="border-t-2 border-custom-darkBlue rounded-t-full h-[100%] w-[100%] bg-custom-darkBlue"></div>
            <div className="bg-custom-darkBlue">
              <p className="px-4 text-white">
                "Really impressed with the super clean interface on @novlrtweets
                as I take it for a test run in preparation for #NaNoWriMo. So
                far, it's totally blowing all the years I've squabbled with
                Microsoft Word out of the water. Even having a nice note section
                is amazing"
              </p>
              <p className="pt-2 pb-2 text-white">@user1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

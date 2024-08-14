import React from "react";

const Footer = () => {
  return (
    <div className="h-[20vh] bg-custom-lightGray">
      <div>
        <p>Ready to get writing?</p>
        <button className="bg-custom-lightBlue h-12 w-[20vh] rounded-md hover:bg-custom-lightBlueHover mx-20">
          <p className="text-xl text-custom-darkBlue">
            Way to creativity <i className="fa-solid fa-arrow-right"></i>
          </p>
        </button>
      </div>
      <div>
        <div>Product</div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;

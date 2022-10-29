import Image from "next/image";
import React from "react";

const Banner = ({ children }) => {
  return (
    <div className="banner">
    <img 
    className="img-banner"
    src={"/images/banner.webp"} alt="Banner"
     />
      {children}
    </div>
  );
};

export default Banner;

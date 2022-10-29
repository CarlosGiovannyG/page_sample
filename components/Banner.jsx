import React from "react";

const Banner = ({ children }) => {
  return (
    <div className="banner">
      <span className="banner-title">
        <p>PROPIEDADES</p>
        <p>FINANCIAMIENTO</p>
        <p>SERVICIOS</p>
      </span>
      {children}
    </div>
  );
};

export default Banner;

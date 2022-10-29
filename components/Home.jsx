import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="d-col justify-content-center mt-5">
        <Banner>
          <Search position={"home"} className={"search-home"} />
        </Banner>
        <Cards title={"Propiedades destacadas"} />
      </div>
    </>
  );
};

export default Home;

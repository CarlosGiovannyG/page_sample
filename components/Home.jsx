import Image from "next/image";
import React from "react";
import Banner from "./Banner";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Banner>
          <Search position={"home"} className={"search-home"} />
        </Banner>
      </div>
    </>
  );
};

export default Home;

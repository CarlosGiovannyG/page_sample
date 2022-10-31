import React from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import Cards from "./Cards";
import Loader from "./Loader";
import Search from "./Search";

const Houses = () => {
  const { loading, data } = useSelector((state) => state.houseProperties);
  console.log( data );

  return (
    <>
      <Banner>
        <Search position={"casas"} className={"search-home"} />
      </Banner>
      {loading ? (
        <Loader />
      ) : (
        <Cards data={data} title={"Casas"} />
      )}
    </>
  );
};

export default Houses;

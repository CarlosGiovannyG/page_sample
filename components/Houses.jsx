import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Loader from "./Loader";
import Search from "./Search";

const Houses = ({ loading, data, title }) => {
  return (
    <>
      {loading ? <Loader /> : <Cards data={data} title={title} />}
    </>
  );
};

export default Houses;

import React from "react";
import Cards from "./Cards";
import Loader from "./Loader";

const Houses = ({ loading, data, title }) => {
  return (
    <>
      {loading ? <Loader /> : <Cards data={data} title={title} />}
    </>
  );
};

export default Houses;

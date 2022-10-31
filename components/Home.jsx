import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Banner from "./Banner";
import Cards from "./Cards";
import Loader from "./Loader";
import Search from "./Search";

const Home = () => {
  const { loading, data } = useSelector((state) => state.featuredProperties);

  return (
    <>
      <Banner>
        <Search position={"home"} className={"search-home"} />
      </Banner>
      {loading ? (
        <Loader />
      ) : (
        <Cards data={data} title={"Propiedades destacadas"} />
      )}
    </>
  );
};

export default Home;

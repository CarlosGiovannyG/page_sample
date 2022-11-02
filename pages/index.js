import React from "react";
import { useSelector } from "react-redux";
import { Home, Layout } from "../components";
import { useSearch } from "../context";
import { featuredProperties } from "../redux/actions";
import { wrapper } from "../redux/store";

export default function Index() {
  const { loading, data } = useSelector((state) => state.featuredProperties);
  const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);

 
  return (
    <Layout>
      <Home title="Propiedades destacadas" data={dataShow} loading={loading} />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(featuredProperties(req));
    }
);

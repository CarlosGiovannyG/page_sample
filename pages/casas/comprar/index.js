import React from "react";
import { useSelector } from "react-redux";
import {  Houses, Layout } from "../../../components";
import { useSearch } from "../../../context";
import { housePropertiesVent } from "../../../redux/actions";
import { wrapper } from "../../../redux/store";

const Vender = () => {
  const { loading, data } = useSelector(
    (state) => state.housePropertiesVent
  );
  const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);
  return (
    <Layout>
      <Houses title='Casas en venta' data={dataShow} loading={loading} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(housePropertiesVent(req));
    }
);

export default Vender;

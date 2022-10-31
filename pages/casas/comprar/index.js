import React from "react";
import { useSelector } from "react-redux";
import {  Houses, Layout } from "../../../components";
import { housePropertiesVent } from "../../../redux/actions";
import { wrapper } from "../../../redux/store";

const Vender = () => {
  const { loading, data } = useSelector(
    (state) => state.housePropertiesVent
  );

  console.log(data);
  return (
    <Layout>
      <Houses title='Casas en venta' data={data} loading={loading} />
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

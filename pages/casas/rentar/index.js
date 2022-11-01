import React from "react";
import { useSelector } from "react-redux";
import { Houses, Layout } from "../../../components";
import { housePropertiesRent } from "../../../redux/actions";
import { wrapper } from "../../../redux/store";

const Rentar = () => {
  const { loading, data } = useSelector((state) => state.housePropertiesRent);

  return (
    <Layout>
      <Houses title='Casas en renta'   data={data} loading={loading} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(housePropertiesRent(req));
    }
);

export default Rentar;

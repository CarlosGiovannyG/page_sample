import React from "react";
import { useSelector } from "react-redux";
import { Apartments, Layout } from "../../../components";
import { apartmentPropertiesRent } from "../../../redux/actions";
import { wrapper } from "../../../redux/store";

const Rentar = () => {
  const { loading, data } = useSelector(
    (state) => state.apartmentPropertiesRent
  );

  console.log(data);
  return (
    <Layout>
      <Apartments data={data} loading={loading} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(apartmentPropertiesRent(req));
    }
);

export default Rentar;

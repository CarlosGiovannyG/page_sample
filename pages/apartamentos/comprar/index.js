import React from "react";
import { useSelector } from "react-redux";
import { Apartments, Layout } from "../../../components";
import { apartmentPropertiesVent } from "../../../redux/actions";
import { wrapper } from "../../../redux/store";

const Vender = () => {
  const { loading, data } = useSelector(
    (state) => state.apartmentPropertiesVent
  );

  return (
    <Layout>
      <Apartments title='Apartamentos Venta'  data={data} loading={loading} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(apartmentPropertiesVent(req));
    }
);

export default Vender;

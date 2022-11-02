import React from "react";
import { useSelector } from "react-redux";
import { Apartments, Layout } from "../../../components";
import { useSearch } from "../../../context";
import { apartmentPropertiesVent } from "../../../redux/actions";
import { wrapper } from "../../../redux/store";

const Vender = () => {
  const { loading, data } = useSelector(
    (state) => state.apartmentPropertiesVent
  );
  const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);
  return (
    <Layout>
      <Apartments title='Apartamentos Venta'  data={dataShow} loading={loading} />
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

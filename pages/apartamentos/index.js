import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../components";
import { Apartments } from "../../components";
import { useSearch } from "../../context";
import { apartmentProperties } from "../../redux/actions";
import { wrapper } from "../../redux/store";

const Apartamentos = () => {
  const { loading, data } = useSelector((state) => state.apartmentProperties);
  const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);
  return (
    <Layout>
      <Apartments title='Apartamentos' data={dataShow} loading={loading} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(apartmentProperties(req));
    }
);

export default Apartamentos;

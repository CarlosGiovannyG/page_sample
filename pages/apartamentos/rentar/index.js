import React from "react";
import { useSelector } from "react-redux";
import { Apartments, Layout } from "../../../components";
import { useSearch } from "../../../context";
import { apartmentPropertiesRent } from "../../../redux/actions";
import { wrapper } from "../../../redux/store";

const Rentar = () => {
  const { loading, data } = useSelector(
    (state) => state.apartmentPropertiesRent
  );
  const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);
  return (
    <Layout>
      <Apartments data={dataShow} loading={loading} />
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

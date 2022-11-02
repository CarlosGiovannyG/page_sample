import React from "react";
import { useSelector } from "react-redux";
import { Houses, Layout } from "../../../components";
import { useSearch } from "../../../context";
import { housePropertiesRent } from "../../../redux/actions";
import { wrapper } from "../../../redux/store";

const Rentar = () => {
  const { loading, data } = useSelector((state) => state.housePropertiesRent);
  const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);
  return (
    <Layout>
      <Houses title='Casas en renta'   data={dataShow} loading={loading} />
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

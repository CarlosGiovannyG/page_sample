import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../../components";
import { Houses } from "../../components";
import { houseProperties } from "../../redux/actions";
import { wrapper } from "../../redux/store";

const House = () => {
  const { loading, data } = useSelector((state) => state.houseProperties);
  return (
    <Layout>
      <Houses title='Casas'   data={data} loading={loading} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(houseProperties(req));
    }
);

export default House;

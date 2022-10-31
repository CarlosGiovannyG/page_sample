import Link from "next/link";
import React from "react";
import { Layout } from "../../components";
import { Houses } from "../../components";
import { houseProperties } from "../../redux/actions";
import { wrapper } from "../../redux/store";

const House = () => {
  return (
    <Layout>
      <Houses />
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

import React from "react";
import { Home, Layout } from "../components";
import { featuredProperties } from "../redux/actions";
import { wrapper } from "../redux/store";

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {

      await store.dispatch(
        featuredProperties(
          req
        )
      );
    }
);

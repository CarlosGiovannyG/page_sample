import Link from "next/link";
import React from "react";
import { Layout } from "../../components";
import { featuredProperties } from "../../redux/actions";
import { wrapper } from "../../redux/store";

const Preconstruction = () => {
  return (
    <Layout>
      <div>
        <h1>Reconstrucción</h1>
        <Link href={"/preconstruccion/construccion"}>Construcción</Link>
      </div>
    </Layout>
  );
};

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

export default Preconstruction;

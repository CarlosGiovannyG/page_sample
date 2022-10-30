import Link from "next/link";
import React from "react";
import { Layout } from "../../../components";

const Construcción = () => {
  return (
    <Layout>
      <div>Construcción</div>
      <Link href={"/preconstruccion/construccion/una"}>
        IR A UN NIVEL
      </Link>
    </Layout>
  );
};

export default Construcción;

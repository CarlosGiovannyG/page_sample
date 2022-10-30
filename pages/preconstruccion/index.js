import Link from "next/link";
import React from "react";
import { Layout } from "../../components";

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

export default Preconstruction;

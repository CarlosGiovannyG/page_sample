import Link from "next/link";
import React from "react";
import { Layout } from "../../../../components";

const UnNivel = () => {
  return (
  <Layout>
      <div>
      Un Nivel
      <Link href={"/preconstruccion/construccion/una/dos"}>IR A DOS NIVEL</Link>
    </div>
  </Layout>
  );
};

export default UnNivel;

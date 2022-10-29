import Head from "next/head";
import React from "react";
import Header from "./Header";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Layout = ({children, title = "Reserve el mejor hotel para sus vacaciones" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header />
      <ToastContainer position="bottom-right" />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

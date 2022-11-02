import Head from "next/head";
import React from "react";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import List from "./List";
import { useSearch } from "../context";
import Breadcrumbs from "./Breadcrumbs ";
import Search from "./Search";
import Banner from "./Banner";

const Layout = ({ children, title = "Inmobiliaria" }) => {
  const { isLocation } = useSearch();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Header>
        <List />
      </Header>
      <Banner>
        <Search position={"casas"} className={"search-home"} />
      </Banner>
      <ToastContainer position="bottom-right" />
      {isLocation !== "/" && <Breadcrumbs />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

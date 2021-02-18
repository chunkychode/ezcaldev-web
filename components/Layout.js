import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

export const Layout = ({ children }) => (
  <>
    <div className="container w-full leading-normal tracking-normal text-white gradient">
      <Head>
        <title>EZCALDEV</title>
      </Head>
      <style jsx>{`
        body {
          font-family: "Source Sans Pro", sans-serif;
        }
        ,
        .gradient {
          background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
        }
      `}</style>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

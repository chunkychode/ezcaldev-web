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
        
        pre {
          white-space: pre-wrap; /* css-3 */
          white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
          white-space: -pre-wrap; /* Opera 4-6 */
          white-space: -o-pre-wrap; /* Opera 7 */
          word-wrap: break-word; /* Internet Explorer 5.5+ */
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

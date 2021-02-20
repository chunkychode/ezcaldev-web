import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

export const Layout = ({ children }) => (
  <>
    <Head>
      <title>EZCALDEV</title>
      <meta charSet="UTF-8" />
      <meta name="google" content="notranslate" />
      <meta http-equiv="Content-Language" content="en" />
    </Head>
    <div className="container w-full leading-normal tracking-normal text-white gradient flex flex-col min-h-screen">
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
          background: linear-gradient(90deg, #8dbbe8 0%, #207bd2 100%);
        }
      `}</style>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

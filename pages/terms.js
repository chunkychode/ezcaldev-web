import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { Layout, Alert } from "../components";
import fetchJson from "../lib/fetchJson";

const Terms = () => {
  return (
    <Layout>
      <h1 className="text-3xl block w-full text-center text-grey-900 mb-6">
        Terms
      </h1>
    </Layout>
  );
};

export default Terms;

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { verifyEmail as _verifyEmail } from "../lib/auth";

export default function verifyEmail({ data }) {
  return (
    <Layout>
      <div>
        {data.emailVerified && (
          <h1 className="title">Thank you for verifying your email</h1>
        )}
        {!data.emailVerified && (
          <h1 className="title">Uh oh something went wrong.</h1>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  let data = {};
  const emailVerificationToken = query.v;
  if (emailVerificationToken) {
    const res = await _verifyEmail({ emailVerificationToken });
    console.log("verifyEmail", res);
    if (res.message === "updated") {
      data.emailVerified = true;
    }
  }

  // Pass data to the page via props
  return { props: { data } };
}

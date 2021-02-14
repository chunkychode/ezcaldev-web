import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function RegisterSuccess() {
  return (
    <Layout>
      <div>
        <h1 className="title">Email Verification</h1>
        <p>
          We just sent you a message from{" "}
          <b>
            <i>noreply@vizipi.com</i>
          </b>
          please verify your email by clicking the button in that email.
          <br />
          and you'll recieve the data enabling you to use our service.
          <br />
          <br />
          many thanks
        </p>
      </div>
    </Layout>
  );
}

import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components";

export default function RegisterSuccess() {
  return (
    <Layout>
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-gray-600 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-900 mb-6">
            Email Verification
          </h1>
          <div>
            <p>
              We just sent you a message from{" "}
              <b>
                <i>noreply@vizipi.com</i>
              </b>{" "}
              Please verify your email by clicking the button in that email.
              <br />
              and you'll receive the data enabling you to use our service.
              <br />
              <br />
              Many thanks
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

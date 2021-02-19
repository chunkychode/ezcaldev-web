import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { Layout, Alert } from "../components";
import fetchJson from "../lib/fetchJson";

const ResetPassword = () => {
  const { register, handleSubmit, errors } = useForm();
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(data) {
    const { email } = data;
    const body = JSON.stringify({ email });

    try {
      const res = await fetchJson("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      console.log("res", res);
      Router.push("/reset-password-success");
    } catch (error) {
      console.error("An unexpected error happened:", JSON.stringify(error));
      setErrorMsg(error.data.message);
    }
  }

  return (
    <Layout>
      <div className="flex items-center h-screen w-full bg-teal-lighter">
        <div className="w-full bg-gray-600 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-darkest mb-6">
            Forgot your password?
          </h1>
          {errorMsg && <Alert message={errorMsg} />}
          <div className="m-4">
            Enter your email address you registered with and we'll send you a
            link to reset it.
          </div>
          <form
            className="mb-4 md:flex md:flex-wrap md:justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                type="email"
                name="email"
                id="email"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && errors.email.message}
            </div>
            <button
              className="block bg-blue-600 hover:bg-blue-800 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;

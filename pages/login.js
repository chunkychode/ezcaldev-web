import Link from "next/link";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import useUser from "../lib/useUser";
import { Layout, Alert } from "../components";
import fetchJson from "../lib/fetchJson";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(data) {
    const { email, password } = data;
    const body = JSON.stringify({ email, password });

    try {
      await mutateUser(
        fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        })
      );
    } catch (error) {
      console.error("An unexpected error happened:", JSON.stringify(error));
      setErrorMsg(error.data.message);
    }
  }

  return (
    <Layout>
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-gray-600 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-900 mb-6">
            Log In
          </h1>
          {errorMsg && <Alert message={errorMsg} />}
          <form
            className="mb-4 md:flex md:flex-wrap md:justify-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-900"
                for="email"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                ref={register({ required: true })}
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
              {errors.email && "Email is required."}
            </div>
            <div className="flex flex-col mb-6 md:w-full">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-900"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                ref={register({
                  required: true,
                })}
                id="password"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
              />
              {errors.password && "Password is required."}
            </div>
            <button
              className="block bg-blue-600 hover:bg-blue-800 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Login
            </button>
          </form>
          <a
            className="block w-full text-center no-underline text-sm text-grey-800 hover:text-grey-900"
            href="/reset-password"
          >
            Forgot password?
          </a>
          <br />
          <a
            className="block w-full text-center no-underline text-sm text-grey-800 hover:text-grey-900"
            href="/register"
          >
            Or register as a new user
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

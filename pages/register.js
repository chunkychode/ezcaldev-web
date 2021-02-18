import { useState, useRef } from "react";
import useUser from "../lib/useUser";
import { Layout } from "../components";
import fetchJson from "../lib/fetchJson";

const Register = () => {
  const emailInput = useRef();
  const passwordInput = useRef();

  const { mutateUser } = useUser({
    redirectTo: "/register-success",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const body = JSON.stringify({ email, password });

    try {
      await mutateUser(
        fetchJson("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        })
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <Layout>
      <div className="flex items-center h-screen w-full bg-teal-lighter">
        <div className="w-full bg-gray-600 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-darkest mb-6">
            Register
          </h1>
          <form
            className="mb-4 md:flex md:flex-wrap md:justify-between"
            action="/"
            method="post"
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
                ref={emailInput}
              />
            </div>
            <div className="flex flex-col mb-6 md:w-full">
              <label
                className="mb-2 uppercase font-bold text-lg text-grey-darkest"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
                type="password"
                name="password"
                id="password"
                ref={passwordInput}
              />
            </div>
            <button
              className="block bg-blue-600 hover:bg-blue-800 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <a
            className="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker"
            href="/login"
          >
            Already have an account?
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

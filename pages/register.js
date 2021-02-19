import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import useUser from "../lib/useUser";
import { Layout, Alert } from "../components";
import fetchJson from "../lib/fetchJson";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  const { mutateUser } = useUser({
    redirectTo: "/register-success",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(data) {
    const { email, password } = data;

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
          {errorMsg && <Alert message={errorMsg} />}
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
                ref={register({
                  required: true,
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i,
                    message:
                      "Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters",
                  },
                })}
              />
              {errors.password && errors.password.message}
            </div>
            <div> By proceeding you are agreeing to our:</div>
            <div className="inline-block mb-2">
              <div>
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5"
                  name="terms"
                  ref={register({ required: "This is required" })}
                />
                <span class="ml-2">
                  <a
                    href="/terms"
                    class=" ml-1"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Terms of Use
                  </a>
                </span>
              </div>
              {errors.terms && (
                <span className="italic ml-1">{errors.terms.message}</span>
              )}
              <div>
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5"
                  name="privacy"
                  ref={register({ required: "This is required" })}
                />
                <span class="ml-2">
                  <a
                    href="/terms"
                    class=" ml-1"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </span>
              </div>
              {errors.privacy && (
                <span className="italic ml-1">{errors.privacy.message}</span>
              )}
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

import Link from "next/link";
import { useState, useRef } from "react";
import useUser from "../lib/useUser";
import { Layout } from "../components";
import fetchJson from "../lib/fetchJson";

const Login = () => {
  const emailInput = useRef();
  const passwordInput = useRef();

  const { mutateUser } = useUser({
    redirectTo: "/",
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
        fetchJson("/api/login", {
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
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Email: <input type="text" ref={emailInput} />
            </label>
          </div>
          <div>
            <label>
              Password: <input type="password" ref={passwordInput} />
            </label>
          </div>
          <div>
            <button type="submit">Sign in</button>
          </div>
          <Link href="/reset-password">
            <a>Forgot your password?</a>
          </Link>
        </form>
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  );
};

export default Login;

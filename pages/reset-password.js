import { useState, useRef } from "react";
import useUser from "../lib/useUser";
import { Layout } from "../components";
import fetchJson from "../lib/fetchJson";

const ResetPassword = () => {
  const emailInput = useRef();

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const email = emailInput.current.value;

    const body = JSON.stringify({ email });

    try {
      await fetchJson("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <Layout>
      <div className="reset-password">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Email: <input type="text" ref={emailInput} />
            </label>
          </div>
          <div>
            <button type="submit">Reset Password</button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .reset-password {
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

export default ResetPassword;

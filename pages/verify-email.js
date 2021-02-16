import React from "react";
import { Layout, ContinueToLogin } from "../components";
import { authenticateUser, verifyEmail as _verifyEmail } from "../lib/auth";
import { createCalOwner, createClaimsForCal } from "../lib/calOnboarding";

export default function verifyEmail({ data }) {
  // todo: below is hacky.. after we create claims, let's log the user out
  return (
    <Layout>
      <div>
        {data.emailVerified && (
          <>
            <h1 className="title">Thank you for verifying your email</h1>
            <ContinueToLogin />
          </>
        )}
        {!data.emailVerified && (
          <h1 className="title">Uh oh something went wrong.</h1>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  try {
    let data = {};
    const emailVerificationToken = query.v;
    if (emailVerificationToken) {
      // grab the app auth token for subsequent calls
      const AUTH_UID = process.env.AUTH_UID;
      const AUTH_PWD = process.env.AUTH_PWD;

      const authResp = await authenticateUser({
        email: AUTH_UID,
        password: AUTH_PWD,
      });
      const { authToken } = authResp;

      const res = await _verifyEmail({ authToken, emailVerificationToken });
      if (res.message === "updated") {
        data.emailVerified = true;
      }

      // create owner
      const createOwnerRes = await createCalOwner({ authToken });
      const { ownerId } = createOwnerRes;

      if (!ownerId) {
        throw new Error("Unable to create calendar owner");
      }
      // create claims
      const createClaimsRes = await createClaimsForCal({
        // todo: API requires this field but will use the valid token correctly
        email: "nobody@nowhere.com",
        emailVerificationToken,
        ownerId,
        authToken,
      });

      if (createClaimsRes.message !== "Created") {
        throw new Error("Unable to create claims");
      }
    }
    return { props: { data } };
  } catch (e) {
    console.log("verifyEmail e", e);
    return { props: { data: { error: e.data } } };
  }
}

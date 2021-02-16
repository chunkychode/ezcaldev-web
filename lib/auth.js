import fetchJson from "./fetchJson";

export const authenticateWithAuthApi = async () => {
  try {
    const AUTH_UID = process.env.AUTH_UID;
    const AUTH_PWD = process.env.AUTH_PWD;

    const authResp = await authenticateUser({
      email: AUTH_UID,
      password: AUTH_PWD,
    });
    const { authToken } = authResp;
    return authToken;
  } catch (e) {
    throw e;
  }
};

export const authenticateUser = async ({ email, password }) => {
  try {
    const url = `${process.env.AUTH_URL}/Login`;
    const body = { email, password };
    const post = {
      method: "post",
      body: JSON.stringify(body),
    };
    const res = await fetchJson(url, post);
    return res;
  } catch (e) {
    throw e;
  }
};

export const registerUser = async ({ email, password }) => {
  try {
    const AUTH_UID = process.env.AUTH_UID;
    const AUTH_PWD = process.env.AUTH_PWD;

    const authResp = await authenticateUser({
      email: AUTH_UID,
      password: AUTH_PWD,
    });

    const url = `${process.env.AUTH_URL}/Register`;
    const body = { email, password };
    const { authToken } = authResp;

    const post = {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        authorization: `${authToken}`,
      },
    };
    const res = await fetchJson(url, post);
    return res;
  } catch (e) {
    throw e;
  }
};

export const verifyEmail = async ({ authToken, emailVerificationToken }) => {
  const url = `${process.env.AUTH_URL}/Register`;
  const body = {
    name: "noone@nowhere.com",
    email: "noone@nowhere.com",
    password: "noone@nowhere.com",
    emailVerificationToken,
  };

  const post = {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      authorization: `${authToken}`,
    },
  };
  const res = await fetchJson(url, post);
  return res;
};

export const resetPassword = async ({ host, email }) => {
  try {
    const authToken = await authenticateWithAuthApi();

    const http = process.env.NODE_ENV === "production" ? "https" : "http";
    const url = `${process.env.AUTH_URL}/ResetPassword`;
    const body = {
      email,
      returnurl: `${http}://${host}/${process.env.RESET_PASSWORD_PATH}`,
    };
    const post = {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        authorization: `${authToken}`,
      },
    };
    const res = await fetchJson(url, post);
    console.log("reset password auth call res", res);
    return res;
  } catch (e) {
    throw e;
  }
};

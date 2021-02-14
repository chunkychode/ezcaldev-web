import fetchJson from "./fetchJson";

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

export const verifyEmail = async ({ emailVerificationToken }) => {
  const AUTH_UID = process.env.AUTH_UID;
  const AUTH_PWD = process.env.AUTH_PWD;

  const authResp = await authenticateUser({
    email: AUTH_UID,
    password: AUTH_PWD,
  });

  const url = `${process.env.AUTH_URL}/Register`;
  const body = {
    name: "noone@nowhere.com",
    email: "noone@nowhere.com",
    password: "noone@nowhere.com",
    emailVerificationToken,
  };
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
};

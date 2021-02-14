import fetchJson from "./fetchJson";

export const createCalOwner = async ({ authToken }) => {
  try {
    // todo: Adam, API key should probably be in the headers.. just saying
    const url = `${process.env.CAL_GQL_URL}/calowner?code=${process.env.CAL_GQL_API_KEY}`;
    const post = {
      method: "post",
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

export const createClaimsForCal = async ({
  email,
  emailVerificationToken,
  ownerId,
  authToken,
}) => {
  try {
    const url = `${process.env.AUTH_URL}/Claims`;
    const claims = [
      { name: "chunky.app.calql:ownerid", value: ownerId },
      { name: "chunky.app.calql:cal:max", value: 100 },
      { name: "chunky.app.calql:event:max", value: 1000 },
    ];

    const body = {
      email,
      emailVerificationToken,
      claims,
    };

    const post = {
      method: "post",
      headers: {
        authorization: `${authToken}`,
      },
      body: JSON.stringify(body),
    };
    const res = await fetchJson(url, post);
    return res;
  } catch (e) {
    throw e;
  }
};

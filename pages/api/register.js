import fetchJson from "../../lib/fetchJson";
import withSession from "../../lib/session";

const registerUser = async ({ email, password }) => {
  try {
    const url = `${process.env.AUTH_URL}/Register`;
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

export default withSession(async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      const res = await registerUser({ email, password });
      console.log("res", res);

      if (res?.message !== "Invalid credentials") {
        const user = { isLoggedIn: true, email };
        req.session.set("user", user);
        await req.session.save();
        return res.json(user);
      }

      return res.status(403).send("");
    }

    return res.status(404).send("");
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});

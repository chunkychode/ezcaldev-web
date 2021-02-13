import fetchJson from "../../lib/fetchJson";
import withSession from "../../lib/session";

const VALID_EMAIL = "test@test.com";
const VALID_PASSWORD = "test";

export default withSession(async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
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

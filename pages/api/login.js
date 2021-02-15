import { authenticateUser } from "../../lib/auth";
import withSession from "../../lib/session";
import jwt_decode from "jwt-decode";

export default withSession(async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      const res = await authenticateUser({ email, password });

      if (res?.message !== "Invalid credentials") {
        const { authToken } = res;
        const decoded = jwt_decode(authToken);
        const { emailVerified } = decoded;

        const user = { isLoggedIn: true, email, authToken, emailVerified };
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

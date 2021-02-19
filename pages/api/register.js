import { registerUser } from "../../lib/auth";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, password } = req.body;

      const resp = await registerUser({ email, password });

      if (resp?.message !== "Invalid credentials") {
        const { authToken } = resp;

        console.log("register authenticate user authToken", authToken);
        const user = { isLoggedIn: true, email, authToken };
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

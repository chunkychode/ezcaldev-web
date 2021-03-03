import withSession from "../../lib/session";
import { setCallbackUrl } from "../../lib/calOnboarding";
import { authenticateUser } from "../../lib/auth";

export default withSession(async (req, res) => {
  console.log("setcallbackurl");
  try {
    if (req.method === "POST") {
      const user = req.session.get("user");
      const { callBackUrl } = req.body;

      const AUTH_UID = process.env.AUTH_UID;
      const AUTH_PWD = process.env.AUTH_PWD;

      const authResp = await authenticateUser({
        email: AUTH_UID,
        password: AUTH_PWD,
      });
      const { authToken } = authResp;

      const resp = await setCallbackUrl({
        email: user.email,
        callBackUrl,
        authToken,
      });

      res.json({
        data: {
          message: "OK",
        },
      });
    } else {
      return res.status(404).send("");
    }
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});

import { resetPassword as _resetPassword } from "../../lib/auth";

const resetPassword = async (req, res) => {
  if (req.method === "POST") {
    const {
      body: { email },
      headers: { host },
    } = req;
    await _resetPassword({ host, email });
    res.status(200);
  }
};

export default resetPassword;

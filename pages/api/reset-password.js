import { resetPassword as _resetPassword } from "../../lib/auth";

const resetPassword = async (req, res) => {
  try {
    if (req.method === "POST") {
      const {
        body: { email },
        headers: { host },
      } = req;
      await _resetPassword({ host, email });
      return res.status(200).send({
        data: {
          message: "OK",
        },
      });
    }
    return res.status(404).send("");
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
};

export default resetPassword;

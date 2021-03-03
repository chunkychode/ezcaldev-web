import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import useUser from "../lib/useUser";
import { Layout, Alert } from "../components";
import fetchJson from "../lib/fetchJson";

const SetCallbackUrl = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isSetUrlSuccess, setIsSetUrlSuccess] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(data) {
    console.log("submit it");
    const { callBackUrl } = data;

    const body = JSON.stringify({ callBackUrl });

    try {
      const res = await fetchJson("/api/setcallbackurl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      console.log("res", res);
      if (res.data.message === "OK") {
        setIsSetUrlSuccess(true);
      }
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <div className="">
      <h2 className="">
        Set callback URL for to be called when one of your calendar or events
        changes.
      </h2>
      {errorMsg && <Alert message={errorMsg} />}
      <form
        className="mb-4 md:flex md:flex-wrap md:justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col mb-4 md:w-full">
          <label
            className="mb-2 uppercase font-bold text-lg text-grey-darkest"
            htmlFor="email"
          >
            URL
          </label>
          <input
            className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
            type="url"
            name="callBackUrl"
            id="callBackUrl"
            ref={register({
              required: true,
              pattern: {
                value: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i,
                message: "Invalid url",
              },
            })}
          />
          {errors.callBackUrl && errors.callBackUrl.message}
          {isSetUrlSuccess && <div>Success!</div>}
        </div>
        <button
          className="block bg-blue-600 hover:bg-blue-800 text-white uppercase text-lg mx-auto p-4 rounded"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SetCallbackUrl;

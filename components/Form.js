import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { Alert } from "./Alert";

export const Form = ({ children, title, errorMsg, onSubmit }) => {
  const { handleSubmit } = useForm();
  return (
    <div className="flex items-center h-screen w-full bg-teal-lighter">
      <div className="w-full bg-gray-600 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 className="block w-full text-center text-grey-darkest mb-6">
          {title}
        </h1>
        {errorMsg && <Alert message={errorMsg} />}
        <form
          className="mb-4 md:flex md:flex-wrap md:justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          {children}
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string,
  errorMsg: PropTypes.string,
  onSubmit: PropTypes.func,
};

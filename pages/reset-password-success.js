import { Layout, ContinueToLogin } from "../components";

const ResetPasswordSuccess = () => {
  return (
    <Layout>
      <div className="flex items-center h-screen w-full">
        <div className="text-center w-full bg-gray-600 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          Reset password sent. Please check your email inbox.
        </div>
      </div>
    </Layout>
  );
};

export default ResetPasswordSuccess;

import { Layout } from "../components";
import SetCallBackUrl from "../components/setCallbackUrl";
import withSession from "../lib/session";
import PropTypes from "prop-types";

const SsrProfile = ({ user }) => {
  return (
    <Layout>
      <div className="flex items-center h-screen w-full bg-teal-lighter">
        <div className="w-full bg-gray-600 rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-darkest mb-6">
            Your profile
          </h1>
          {user?.isLoggedIn && (
            <>
              {user.emailVerified ? (
                <>
                  <SetCallBackUrl />
                </>
              ) : (
                <div>
                  Your account has not been verified. Please check your e-mail.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
});

export default SsrProfile;

SsrProfile.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string,
    authToken: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};

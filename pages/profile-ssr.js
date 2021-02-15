import Layout from "../components/Layout";
import withSession from "../lib/session";
import PropTypes from "prop-types";

const SsrProfile = ({ user }) => {
  console.log("user", user);
  return (
    <Layout>
      <h1>Your profile</h1>
      {user?.isLoggedIn && (
        <>
          <div>You are logged in as {user.email}</div>
          {user.emailVerified ? (
            <div>Your account has been verified</div>
          ) : (
            <div>Your account has not been verified</div>
          )}
        </>
      )}
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

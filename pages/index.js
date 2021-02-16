import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components";
import CodeSample from "../components/CodeSample";
import withSession from "../lib/session";

const renderEmailNotVerified = ({ user }) => {
  if (user.isLoggedIn && !user.emailVerified) {
    return <div>Please check your email inbox to verify your account</div>;
  }
};

const renderEmailVerified = ({ user }) => {
  if (user.isLoggedIn && user.emailVerified) {
    return <CodeSample user={user} />;
  }
};

export default function Home({ user }) {
  return (
    <Layout>
      <div>
        <h1 className="title">Welcome to EzCalDev</h1>

        <p className="description">Calendaring as a service</p>

        <div className="grid">
          <a href="/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about our features and API.</p>
          </a>

          {!user?.isLoggedIn && (
            <Link href="/register">
              <a className="card">
                <h3>Try it for free &rarr;</h3>
                <p>Sign up now to try our graphQL playground for free.</p>
              </a>
            </Link>
          )}
          {renderEmailNotVerified({ user })}
          {renderEmailVerified({ user })}
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user") || {};

  return {
    props: { user },
  };
});

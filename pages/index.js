import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className="title">Welcome to EzCalDev</h1>

        <p className="description">Calendaring as a service</p>

        <div className="grid">
          <a href="/docs/schema/index.html" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about our features and API.</p>
          </a>

          <Link href="/register">
            <a className="card">
              <h3>Try it for free &rarr;</h3>
              <p>Sign up now to try our graphQL playground for free.</p>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

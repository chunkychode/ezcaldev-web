import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeSample = ({ user }) => {
  const emailStub = user.email || "EMAIL";
  const authTokenStub = user.authToken || "AUTH_FROM_ABOVE";

  const [copiedExample1, setCopiedExample1] = React.useState(false);
  const [copiedExample2, setCopiedExample2] = React.useState(false);
  const [copiedHeader, setCopiedHeader] = React.useState(false);

  const example1 = `curl -i -X POST ${process.env.NEXT_PUBLIC_AUTH_URL}/api/Login -H "Content-Type: application/json" -d "{\"email\":\"${emailStub}\", \"password\":\"PASSWORD\"}"`;
  const example2 = `curl -i -X POST ${process.env.NEXT_PUBLIC_CAL_GQL_URL}/api/graphql -H "Content-Type: application/json" -H "Authorization: ${authTokenStub}" -d '{"query": "query {Event {title}}"}'`;
  const playGroundHeader = `{"Authorization":"${authTokenStub}"}`;
  return (
    <ul>
      <li>
        Grab the <i>auth-token</i> header from login and supply that an
        authorization header to the graphql endpoint
        <br />
        <br />
        <label>
          <code className="bg-black block m-2 p-2 break-words whitespace-pre overflow-x-scroll">
            {copiedExample1 && (
              <div className="float-right bg-white text-gray-500">Copied!</div>
            )}
            <CopyToClipboard
              text={example1}
              onCopy={() => {
                setCopiedExample1(true);
                setCopiedExample2(false);
                setCopiedHeader(false);
              }}
            >
              <button className="bg-white float-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
              </button>
            </CopyToClipboard>
            {example1}
          </code>
        </label>
        <br />
        <br />
      </li>
      <li>
        Visit{" "}
        <a
          href={`${process.env.NEXT_PUBLIC_CAL_GQL_URL}/graphql`}
          target="_blank"
        >
          <u>Calendar playground</u>
        </a>
        <br />
        <i>don't forget to put the authorization header</i>
        <div>
          <code className="bg-black block m-2 p-2  break-words whitespace-pre overflow-x-scroll">
            {copiedHeader && (
              <div className="float-right bg-white text-gray-500">Copied!</div>
            )}
            <CopyToClipboard
              text={playGroundHeader}
              onCopy={() => {
                setCopiedHeader(true);
                setCopiedExample2(false);
                setCopiedExample1(false);
              }}
            >
              <button className="bg-white float-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
              </button>
            </CopyToClipboard>
            {playGroundHeader}
          </code>
        </div>
        <br />
        <br />
        or curl like
        <br />
        <label>
          <div>
            <code className="bg-black block m-2 p-2 break-words whitespace-pre overflow-visible">
              {copiedExample2 && (
                <div className="float-right bg-white text-gray-500">
                  Copied!
                </div>
              )}
              <CopyToClipboard
                text={example2}
                onCopy={() => {
                  setCopiedExample2(true);
                  setCopiedExample1(false);
                  setCopiedHeader(false);
                }}
              >
                <button className="bg-white float-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                  </svg>
                </button>
              </CopyToClipboard>
              {example2}
            </code>
          </div>
        </label>
      </li>
    </ul>
  );
};

export default CodeSample;

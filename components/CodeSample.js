import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeSample = () => {
  const [copiedExample1, setCopiedExample1] = React.useState(false);
  const [copiedExample2, setCopiedExample2] = React.useState(false);

  const example1 = `curl -i -X POST https://chunkyauth.azurewebsites.net/api/Login -H "Content-Type: application/json" -d "{\"email\":\"EMAIL\", \"password\":\"PASSWORD\"}"`;
  const example2 = `curl -i -X POST https://chunkycalql.azurewebsites.net/api/graphql -H "Content-Type: application/json" -H "Authorization: AUTH_FROM_ABOVE" -d "{\"query\": \"query {Event {title}}\"}"`;

  return (
    <ul>
      <li>
        Grab the <i>auth-token</i> header from login and supply that an
        authorization header to the graphql endpoint
        <br />
        <br />
        <label>
          <pre>{example1}</pre>
          <CopyToClipboard
            text={example1}
            onCopy={() => {
              setCopiedExample1(true);
              setCopiedExample2(false);
            }}
          >
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
          {copiedExample1 && <div>Copied!</div>}
        </label>
        <br />
        <br />
      </li>
      <li>
        Visit{" "}
        <a
          href="https://chunkycalql.azurewebsites.net/api/graphql"
          target="_blank"
        >
          <u>Calendar playground</u>
        </a>
        <br />
        <i>
          don't forget to put the authorization header you got from the last
          step.
        </i>
        <br />
        <br />
        or curl like
        <br />
        <br />
        <label>
          <pre>{example2}</pre>
          <CopyToClipboard
            text={example2}
            onCopy={() => {
              setCopiedExample2(true);
              setCopiedExample1(false);
            }}
          >
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
          {copiedExample2 && <div>Copied!</div>}
        </label>
      </li>
    </ul>
  );
};

export default CodeSample;

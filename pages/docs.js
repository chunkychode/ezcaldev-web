import Header from "../components/Header";
import Footer from "../components/Footer";
import Iframe from "react-iframe";

export default function Docs() {
  let height = 500;
  if (typeof window !== "undefined") {
    height = window.innerHeight - 150;
  }

  return (
    <>
      <Header />
      <Iframe
        url="/docs/schema/index.html"
        width="100%"
        height={height}
        id="myId"
        position="relative"
      />
      <Footer />
    </>
  );
}

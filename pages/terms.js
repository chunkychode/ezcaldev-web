import { Layout, Alert } from "../components";

const Terms = () => {
  return (
    <Layout>
      <div className="bg-white text-gray-900 p-5">
        <h1 className="text-3xl block w-full text-center text-grey-900 mb-6">
          Terms of Use and Disclaimer
        </h1>
        <div className="mb-1">Last updated Feb 19, 2021</div>
        <h1 className="font-bold text-lg">INTRODUCTION</h1>
        <div className="m-1">
          The information provided by EZCALDEV (“we,” “us” or “our”) on
          ezcaldev.com (the “Site”) is for general informational purposes only.
          All information on the Site is provided in good faith, however we make
          no representation or warranty of any kind, express or implied,
          regarding the accuracy, adequacy, validity, reliability, availability
          or completeness of any information on the Site. Under no circumstance
          shall we have any liability to you for any loss or damage of any kind
          incurred as a result of the use of the site or reliance on any
          information provided on the site. Your use of the site and your
          reliance on any information on the site is solely at your own risk.
          This disclaimer template was created using Termly.
        </div>
        <h1 className="font-bold text-lg">
          EXTERNAL LINKS DISCLAIMER FOR WEBSITE
        </h1>
        <div className="m-1">
          The Site may contain (or you may be sent through the Site) links to
          other websites or content belonging to or originating from third
          parties or links to websites and features in banners or other
          advertising. Such external links are not investigated, monitored, or
          checked for accuracy, adequacy, validity, reliability, availability or
          completeness by us. We do not warrant, endorse, guarantee, or assume
          responsibility for the accuracy or reliability of any information
          offered by third-party websites linked through the site or any website
          or feature linked in any banner or other advertising. We will not be a
          party to or in any way be responsible for monitoring any transaction
          between you and third-party providers of products or services.
        </div>
      </div>
    </Layout>
  );
};

export default Terms;

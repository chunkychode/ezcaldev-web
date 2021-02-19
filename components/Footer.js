const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">EZCALDEV</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2021 Chunky Company --
            <a
              href="/terms"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              ● Terms of Use
            </a>
            <a
              href="/privacy"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              ● Privacy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;

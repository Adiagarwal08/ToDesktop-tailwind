import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      id="footer"
      className="px-6 py-12 max-w-7xl mt-8 mx-auto lg:px-8 lg:mt-16"
    >
      <div className="rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
        <Link to="/" className="font-light">
          Documentation
        </Link>
        <div className="flex gap-8 text-lg">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
        <Link to="/" id="brand" className="flex gap-2 items-center flex-1">
          <img
            className="object-cover max-w-12 max-h-12"
            src="assets/asset 0.png"
            alt="logo"
          />
          <span className="text-lg font-medium">ToDesktop</span>
        </Link>
      </div>
      <div
        id="sub-footer"
        className="flex flex-col gap-6 items-center justify-center my-12 "
      >
        <div className="flex gap-2 items-center">
          <img
            src="assets/asset 54.svg"
            alt="y-comninator"
            className="w-4 h-4"
          />
          <p className="text-sm text-gray-600">A Y Combinator company.</p>
        </div>
        <p className="text-sm text-gray-400">
          © 2025 ToDesktop, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

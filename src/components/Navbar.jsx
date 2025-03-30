import { Link } from "react-router-dom";

import download from "../images/download.jpeg";

const Navbar = () => {
  const handleMenu = () => {
    const navDialog = document.getElementById("nav-dialog");
    if (navDialog) {
      navDialog.classList.toggle("hidden");
    }
  };
  return (
    <div className="p-3 flex bg-white justify-between fixed top-0 left-0 right-0 z-20 items-center shadow-md">
      <Link to="/" className="flex gap-2 items-center flex-1">
        <img
          src="assets/asset 0.png"
          alt="logo"
          className="max-w-12 max-h-12 object-cover"
        />
        <span className="text-lg font-medium">ToDesktop</span>
      </Link>
      <div id="nav-menu" className="hidden lg:flex gap-12 ">
        <a href="#pricing" className="font-medium hover:text-[#3238f2]">
          Pricing
        </a>
        <Link to="/" className="font-medium hover:text-[#3238f2]">
          Docs
        </Link>
        <Link to="/" className="font-medium hover:text-[#3238f2]">
          Changelog
        </Link>
        <a href="#testimonials" className="font-medium hover:text-[#3238f2]">
          Blogs
        </a>
        <Link to="/" className="font-medium hover:text-[#3238f2]">
          Login
        </Link>
      </div>
      <div className="hidden lg:flex flex-1 justify-end">
        <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
          <i className="fa-brands fa-drupal"></i>
          <span>Electron Developers</span>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <button
        className="p-2 lg:hidden"
        onClick={() => {
          handleMenu();
        }}
      >
        <i className="fa-solid fa-bars text-gray-600 hover:cursor-pointer"></i>
      </button>

      <div
        id="nav-dialog"
        className="hidden fixed z-10 lg:hidden bg-white inset-0 p-3"
      >
        <div id="nav-bar" className="flex justify-between">
          <Link to="/" className="flex gap-2 items-center">
            <img
              src="assets/asset 0.png"
              alt="logo"
              className="max-w-12 max-h-12 object-cover"
            />
            <span className="text-lg font-medium">ToDesktop</span>
          </Link>
          <button
            className="p-2 lg:hidden"
            onClick={() => {
              handleMenu();
            }}
          >
            <i className="fa-solid fa-xmark text-gray-600 hover:cursor-pointer"></i>
          </button>
        </div>
        <div className="mt-6">
          <Link
            to="/"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            Pricing
          </Link>
          <Link
            to="/"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            Docs
          </Link>
          <Link
            to="/"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            Changelog
          </Link>
          <Link
            to="/"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            Blogs
          </Link>
          <Link
            to="/"
            className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg"
          >
            Login
          </Link>
        </div>
        <div className="h-[1px] bg-gray-300"></div>
        <button className="mt-6 w-full flex md:flex gap-2 items-center  px-6 py-4 rounded-lg hover:bg-gray-50">
          <i className="fa-brands fa-drupal"></i>
          <span>Electron Developers</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

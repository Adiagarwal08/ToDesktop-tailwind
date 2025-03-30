import check from "../images/check.jpg";
import { Link } from "react-router-dom";

const Step = () => {
  return (
    <div>
      <div
        id="steps"
        className="flex flex-col gap-6 px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32"
      >
        <h2 className="text-5xl font-medium sm:font-semibold mb-14">
          How it works
        </h2>
        <div
          id="step1"
          className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row lg:gap-16"
        >
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium">
              Step 1
            </span>
            <h3 className="text-4xl ">Bootstrap straight from your web app</h3>
            <p className="text-lg font-light">
              Copy and paste your web app url into ToDesktop. Customise your app
              design, app icon and window frame UI with no code.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Multiple windows
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Menubar/tray menus
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Offline support
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Customisable menus
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Launch on startup
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Tabs (Mac only)
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-12 ">
            <img src="assets/asset 66.svg" alt="asset" />
          </div>
        </div>
        <div
          id="step2"
          className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row lg:gap-16"
        >
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium">
              Step 2
            </span>
            <h3 className="text-4xl ">Bootstrap straight from your web app</h3>
            <p className="text-lg font-light">
              Copy and paste your web app url into ToDesktop. Customise your app
              design, app icon and window frame UI with no code.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Multiple windows
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Menubar/tray menus
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Offline support
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Customisable menus
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Launch on startup
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Tabs (Mac only)
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-12 ">
            <img src="assets/asset 66.svg" alt="asset" />
          </div>
        </div>
        <div
          id="step3"
          className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row lg:gap-16"
        >
          <div className="flex flex-col gap-6 lg:w-1/2">
            <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium">
              Step 3
            </span>
            <h3 className="text-4xl ">Bootstrap straight from your web app</h3>
            <p className="text-lg font-light">
              Copy and paste your web app url into ToDesktop. Customise your app
              design, app icon and window frame UI with no code.
            </p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Multiple windows
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Menubar/tray menus
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Offline support
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Customisable menus
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Launch on startup
                </Link>
              </li>
              <li className="flex gap-4">
                <img className="h-8 w-8 opacity-60" src={check} alt="check" />
                <Link
                  className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80"
                  to="/"
                >
                  {" "}
                  Tabs (Mac only)
                </Link>
              </li>
            </ul>
          </div>
          <div className="pt-12 ">
            <img src="assets/asset 66.svg" alt="asset" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;

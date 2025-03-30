import check from "../images/check.jpg";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div
      id="testtimonials"
      className="px-6 py-12 max-w-7xl mt-4 mx-auto lg:px-8 lg:mt-4"
    >
      <h2 className="text-5xl sm:font-semibold mb-14 font-medium">
        Customer stories
      </h2>
      <div className="rounded-xl border border-slate-200 flex flex-col lg:flex-row items-end">
        <div className="flex flex-col gap-12 p-8">
          <div className="h-4 w-fit">
            <img src="assets/asset 44.svg" alt="image" />
          </div>
          <h3 className="text-xl leading-relaxed">
            ClickUp used ToDesktop to get their desktop app in front of
            customers in days instead of months.
          </h3>
          <div id="tag-container" className="flex gap-3 flex-wrap">
            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src={check} alt="check" className="h-6 w-6 bg-yellow-800" />
              <span className="font-medium">Chromeless UI</span>
            </div>
            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src={check} alt="check" className="h-6 w-6 bg-yellow-800" />
              <span className="font-medium">Native spellcheck</span>
            </div>
            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src={check} alt="check" className="h-6 w-6 bg-yellow-800" />
              <span className="font-medium">Task time in menubar</span>
            </div>
            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src={check} alt="check" className="h-6 w-6 bg-yellow-800" />
              <span className="font-medium">
                Notification count in the dock
              </span>
            </div>
            <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
              <img src={check} alt="check" className="h-6 w-6 bg-yellow-800" />
              <span className="font-medium">Global hotkey to create task</span>
            </div>
          </div>
          <p className="text-lg font-light text-gray-500">
            “ToDesktop provided us with a{" "}
            <span className="text-gray-800">polished desktop app</span> in no
            time. Their expert team guided us through a smooth migration from
            our outdated legacy desktop app, enabling us to deliver{" "}
            <span className="text-gray-800">new and improved features</span> to
            our customers within days.”
          </p>
          <div id="user-card" className="flex gap-4">
            <div className="w-12 ">
              <img
                src="assets/asset 45.jpeg"
                alt="image"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium">Zeb Evans</h3>
              <p className="text-gray-500">
                Founder & CEO,{" "}
                <Link
                  to="/"
                  className="border-b border-dotted border-gray-300 hover:border-solid hover:border-gray-500"
                >
                  ClickUp
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="assets/asset 46.png" alt="image" className="pl-12" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
        <div className="rounded-2xl group p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-slate-50 p-6 gap-6 flex flex-col rounded-2xl group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-2xl font-semibold">Native APIs</h3>
            </div>
            <p className="font-light text-lg">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex gap-4">
              <div className="flex">
                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                  <img
                    src="assets/asset 47.png"
                    className="min-w-16 min-h-16"
                    alt="image"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                  <img src="assets/asset 48.jpeg" alt="image" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">Rick Pastoor</h3>
                <Link
                  to="/"
                  className="border-b border-dotted border-gray-300 w-fit text-gray-500 hover:border-solid hover:border-gray-500"
                >
                  Rise
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl group p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-slate-50 p-6 gap-6 flex flex-col rounded-2xl group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-2xl font-semibold">
                Cleaner, less clustered UI
              </h3>
            </div>
            <p className="font-light text-lg">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex gap-4">
              <div className="flex">
                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                  <img
                    src="assets/asset 47.png"
                    className="min-w-16 min-h-16"
                    alt="image"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                  <img src="assets/asset 48.jpeg" alt="image" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">Rick Pastoor</h3>
                <Link
                  to="/"
                  className="border-b border-dotted border-gray-300 w-fit text-gray-500 hover:border-solid hover:border-gray-500"
                >
                  Rise
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl group p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
          <div className="bg-slate-50 p-6 gap-6 flex flex-col rounded-2xl group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="text-2xl font-semibold">Code optional</h3>
            </div>
            <p className="font-light text-lg">
              What sets ToDesktop apart is its seamless integration with native
              APIs using our existing web codebase. By tapping into APIs like
              Tray and Notifications, we've crafted an exceptionally polished
              desktop user experience.
            </p>
            <div className="flex gap-4">
              <div className="flex">
                <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                  <img
                    src="assets/asset 47.png"
                    className="min-w-16 min-h-16"
                    alt="image"
                  />
                </div>
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                  <img src="assets/asset 48.jpeg" alt="image" />
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium">Rick Pastoor</h3>
                <Link
                  to="/"
                  className="border-b border-dotted border-gray-300 w-fit text-gray-500 hover:border-solid hover:border-gray-500"
                >
                  Rise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-black flex flex-col lg:flex-row mt-6 pt-6 lg:pt-10">
        <div className="flex flex-col gap-4 p-8 lg:flex-1 lg:gap-8">
          <span className="text-gray-400 font-medium">
            READY TO START BUILDING?
          </span>
          <h2 className="text-4xl leading-tight text-white font-semibold lg:text-5xl">
            Create your desktop app for free*
          </h2>
          <p className="text-lg font-light text-gray-400 lg:text-xl">
            ToDesktop Builder will take you step-by-step through the process of
            creating your first desktop app in just a few minutes.
          </p>
          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-opacity-90 flex justify-center items-center gap-4">
            <i className="fa-solid fa-download"></i>
            <span>Download ToDesktop Builder </span>
          </button>
          <p className="text-gray-400 text-xs italic leading-tight">
            *You can create a desktop app and run it on your computer for free.
            You will only be charged if you want to create a distributable app
            for your customers.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src="assets/asset 46.png" alt="image" className="pl-12" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

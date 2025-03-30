import check from "../images/check.jpg";

const Pricing = () => {
  return (
    <div
      id="pricing"
      className="px-6 py-12 max-w-7xl mt-8 mx-auto lg:px-8 lg:mt-16"
    >
      <h2 className="text-5xl font-medium leading-normal sm:font-semibold max-w-2xl">
        Choose a plan that fits your needs
      </h2>
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
          <h3 className="text-4xl font-semibold">Free</h3>
          <p className="text-lg font-light ">
            For personal use or testing your app before deploying to customers.
          </p>
          <p className="uppercase">Key Features</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-4">
              <img
                src={check}
                alt="check"
                className="h-7 w-7 opacity-60 -translate-x-2"
              />
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <img
                src={check}
                alt="check"
                className="h-7 w-7 opacity-60 -translate-x-2"
              />
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa-solid fa-xmark text-gray-500"></i>
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa-solid fa-xmark text-gray-500"></i>
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
          </ul>
          <button className="border  px-8 py-3 text-blue-600 rounded-lg hover:border-gray-700 font-medium">
            Read Docs
          </button>
        </div>
        <div className="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
          <h3 className="text-4xl font-semibold">Essential</h3>
          <p className="text-lg font-light ">For simple desktop apps.</p>
          <p className="text-lg font-light">
            <span className="text-2xl font-semibold">$99</span>/month
          </p>
          <p className="uppercase">Key Features</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-4">
              <img
                src={check}
                alt="check"
                className="h-7 w-7 opacity-60 -translate-x-2"
              />
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <img
                src={check}
                alt="check"
                className="h-7 w-7 opacity-60 -translate-x-2"
              />
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa-solid fa-xmark text-gray-500"></i>
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa-solid fa-xmark text-gray-500"></i>
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
          </ul>
          <button className="border  px-8 py-3 text-blue-600 rounded-lg hover:border-gray-700 font-medium">
            Read Docs
          </button>
        </div>
        <div className="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 relative lg:border-none lg:bg-slate-50">
          <p className="text-blue-800 text-sm bg-indigo-100 rounded-full w-fit px-4 py-2 font-medium absolute top-0  right-8 -translate-y-1/2">
            Most Popular
          </p>
          <h3 className="text-4xl font-semibold">Professional</h3>
          <p className="text-lg font-light ">For sophisticated desktop apps.</p>
          <p className="text-lg font-light">
            <span className="text-2xl font-semibold">$240</span>/month
          </p>
          <p className="uppercase">Key Features</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-4">
              <img
                src={check}
                alt="check"
                className="h-7 w-7 opacity-60 -translate-x-2"
              />
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <img
                src={check}
                alt="check"
                className="h-7 w-7 opacity-60 -translate-x-2"
              />
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa-solid fa-xmark text-gray-500"></i>
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
            <li className="flex items-center gap-4">
              <i className="fa-solid fa-xmark text-gray-500"></i>
              <span className="text-lg font-light text-gray-800">
                Free for personal use
              </span>
            </li>
          </ul>
          <button className="bg-blue-600 px-8 py-3 text-white rounded-lg hover:bg-opacity-90 font-medium">
            Read Docs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

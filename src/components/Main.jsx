import { useEffect, useRef } from "react";
import arrow from "../images/arrow.png";

const setupIntersectionObserver = (
  element,
  isLTR,
  speed,
  initialTranslateLTR,
  initialTranslateRTL
) => {
  if (!element) return;

  const scrollHandler = () => {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = initialTranslateLTR + translateX;
    } else {
      totalTranslate = -(initialTranslateRTL + translateX);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  };

  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);
};

const Main = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const initialLTR = -48 * 4;
    const initialRTL = -36 * 4;

    if (line1Ref.current)
      setupIntersectionObserver(
        line1Ref.current,
        true,
        0.15,
        initialLTR,
        initialRTL
      );
    if (line2Ref.current)
      setupIntersectionObserver(
        line2Ref.current,
        false,
        0.15,
        initialLTR,
        initialRTL
      );
    if (line3Ref.current)
      setupIntersectionObserver(
        line3Ref.current,
        true,
        0.15,
        initialLTR,
        initialRTL
      );

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="mt-16">
      {/* Hero section */}
      <div
        id="hero"
        className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent"
      >
        <div
          id="hero-container"
          className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12"
        >
          <div
            id="version-text"
            className="flex my-6 gap-2 items-center border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
            <p className="font-medium text-yellow-600">
              v0.21.1:{" "}
              <span className="text-yellow-800 ">Find-in-page bug fixes</span>
            </p>
            <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
          </div>
          <div id="hero-features" className="hidden sm:flex gap-8 my-6">
            <div className="flex justify-center gap-2 items-center text-gray-500">
              <i className="fa-solid fa-file-code text-sm"></i>
              <p>Code Optional</p>
            </div>
            <div className="flex justify-center gap-2 items-center text-gray-500">
              <i className="fa-solid fa-hand-fist text-sm"></i>
              <p>Drag & drop builder</p>
            </div>
            <div className="flex justify-center gap-2 items-center text-gray-500">
              <i className="fa-solid fa-laptop text-sm"></i>
              <p>Windows, Mac, Linux</p>
            </div>
          </div>
          <h1 className="text-4xl font-semibold leading-snug mt-4 text-gray-800 sm:text-6xl sm:leading-normal">
            Web app to desktop app in minutes
          </h1>
          <p className="text-xl mt-4 font-medium text-gray-800 sm:text-2xl sm:mt-8">
            Take your web app codebase and transform it into a cross platform
            desktop app with native functionality.
          </p>
          <div
            id="buttons-container"
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-600 shadow-small hover:bg-opacity-90 cursor-pointer">
              Download Now
            </button>
            <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover: border-gray-800 cursor-pointer">
              Read Docs
            </button>
          </div>
        </div>
        <div id="companies-container" className="flex flex-col gap-8">
          <div id="companies-title" className="flex justify-center gap-2">
            <img src={arrow} alt="arrow" className="translate-y-2 h-4 w-4" />
            <span className="font-medium">APPS POWERED BY TODESKTOP</span>
            <img
              src={arrow}
              alt="arrow"
              className="translate-y-2 h-4 w-4 -scale-x-100"
            />
          </div>
          <div id="lines-group" className="flex flex-col gap-4">
            <div className="relative w-full overflow-hidden">
              <div
                ref={line1Ref}
                id="line1"
                className="flex gap-4 min-w-max -translate-x-48 transition-transform ease-linear"
              >
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 3.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 4.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 5.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 6.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 7.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 8.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 9.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 10.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 11.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 12.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 13.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="/assets/asset 14.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-full overflow-hidden">
              <div
                ref={line2Ref}
                id="line2"
                className="flex gap-4 min-w-max -translate-x-36 transition-transform ease-linear"
              >
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 15.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 16.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 17.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 18.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 19.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 20.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 21.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 22.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 23.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 24.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 25.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 26.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-full overflow-hidden">
              <div
                ref={line3Ref}
                id="line3"
                className="flex md:hidden gap-4 min-w-max  -translate-x-48 transition-transform ease-linear"
              >
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 27.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 28.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 29.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 13.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 5.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 4.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 24.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 34.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 35.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 36.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 37.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                  <img
                    className="w-12 h-12 md:h-16 md:w-16"
                    src="assets/asset 38.png"
                    alt="unbounce"
                  />
                  <span className="text-[12px] md:text-[16px] font-semibold">
                    Unbounce
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

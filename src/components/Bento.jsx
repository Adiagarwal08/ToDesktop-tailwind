import { useEffect, useRef } from "react";

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

const Bento = () => {
  const line4Ref = useRef(null);

  useEffect(() => {
    const initialLTR = -48 * 4;
    const initialRTL = -36 * 4;

    if (line4Ref.current)
      setupIntersectionObserver(
        line4Ref.current,
        true,
        0.8,
        initialLTR,
        initialRTL
      );

    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div>
      <div
        id="bento-grid"
        className="px-6 py-12 ma-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32"
      >
        <h2 className="font-medium text-5xl sm:font-semibold mb-14 max-w-2xl leading-normal">
          ToDesktop handles the details
        </h2>
        <div
          id="grid-container"
          className="flex flex-col gap-6 lg:grid grid-cols-3"
          style={{ gridAutoRows: "96px" }}
        >
          <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
              <h3 className="text-2xl font-medium">Native Notifications</h3>
              <img src="assets/asset 37.png" alt="image" />
            </div>
          </div>
          <div className="row-start-1 row-end-4 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
              <h3 className="text-2xl font-medium">Native Notifications</h3>
              <p className="text-lg text-center font-light">
                We’ll ensure the underlying browser is up to date and deliver
                performance improvements, security patches, & additional
                features.
              </p>
              <img src="assets/asset 37.png" alt="image" />
            </div>
          </div>
          <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
              <h3 className="text-2xl font-medium">Native Notifications</h3>
              <img src="assets/asset 37.png" alt="image" />
            </div>
          </div>
          <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
              <h3 className="text-2xl font-medium">Native Notifications</h3>
              <p className="text-lg text-center font-light">
                We’ll ensure the underlying browser is up to date and deliver
                performance improvements, security patches, & additional
                features.
              </p>
              <img src="assets/asset 37.png" alt="image" />
            </div>
          </div>
          <div className="row-start-4 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
              <h3 className="text-2xl font-medium">Native Notifications</h3>
              <img src="assets/asset 37.png" alt="image" />
            </div>
          </div>
          <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
            <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 hover:to-yellow-50">
              <h3 className="text-2xl font-medium">Native Notifications</h3>
              <p className="text-lg text-center font-light">
                We’ll ensure the underlying browser is up to date and deliver
                performance improvements, security patches, & additional
                features.
              </p>
              <img src="assets/asset 37.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
      {/* companies feature line */}
      <div
        id="feature-line"
        className="px-6 py-12 max-w-7xl mt-4 mx-auto lg:px-8 lg:mt-4"
      >
        <div className="border rounded-lg overflow-hidden flex justify-center p-4">
          <div ref={line4Ref} id="line4" className="flex gap-8 p-6">
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Download Analytics
            </h3>
            <span>•</span>
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Custom Menus
            </h3>
            <span>•</span>
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Multi-window support
            </h3>
            <span>•</span>
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Trays
            </h3>
            <span>•</span>
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Deep Linking
            </h3>
            <span>•</span>
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Download Analytics
            </h3>
            <span>•</span>
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Launch at startup
            </h3>
            <span>•</span>
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Offline Support
            </h3>
            <span>•</span>
            <h3 className="whitespace-nowrap my-0 mx-2 text-2xl font-semibold">
              Good Signing
            </h3>
            <span>•</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Is ToDesktop For Me?",
    answer:
      "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.",
  },
  {
    id: 2,
    question: "How does ToDesktop work?",
    answer:
      "ToDesktop wraps your web app in a native desktop application, making it easy for users to install and use.",
  },
  {
    id: 3,
    question: "Is ToDesktop free?",
    answer:
      "ToDesktop offers a free trial, but premium features require a subscription.",
  },
  {
    id: 4,
    question: "Which platforms does ToDesktop support?",
    answer: "ToDesktop supports Windows, macOS, and Linux.",
  },
  {
    id: 5,
    question: "Can I customize the app appearance?",
    answer:
      "Yes! ToDesktop allows full customization, including icons, branding, and window behavior.",
  },
  {
    id: 6,
    question: "Do I need coding skills to use ToDesktop?",
    answer:
      "No, ToDesktop is designed to be user-friendly and requires no coding skills to convert your web app.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div
      id="faq"
      className="px-6 py-12 max-w-7xl mt-8 mx-auto lg:px-8 lg:mt-16"
    >
      <h2 className="text-5xl font-medium leading-normal sm:font-semibold max-w-2xl">
        FAQs
      </h2>
      <dl className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
        {faqs.map(({ id, question, answer }) => (
          <div
            key={id}
            className="group cursor-pointer rounded-xl border border-gray-200 bg-gray-50 p-6"
          >
            <dt
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(id)}
            >
              <p className="font-semibold text-lg">{question}</p>
              <i
                className={`fa-solid fa-chevron-up transition-transform ${
                  openFaq === id ? "" : "-rotate-180"
                }`}
              ></i>
            </dt>
            <dd
              className={`text-lg font-light mt-6 transition-all ${
                openFaq === id ? "block" : "hidden"
              }`}
            >
              <p>{answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default FAQ;

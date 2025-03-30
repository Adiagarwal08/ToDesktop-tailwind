/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1E40AF",
        myprimary: "#ee0181",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-rgba": "rgba(255, 140, 140, 0.15)",
        "color-rgba": "rgba(255, 94, 94, 1)",
        "checked-color": "rgba(141, 156, 184, 1)",
      },
    },
  },
  plugins: [],
};

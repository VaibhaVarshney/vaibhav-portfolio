module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#0ea5a4", // teal-ish, keep as you chose
          600: "#0ea5a4",
        },
        pagebg: "#f8fafc", // very light background
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 30px rgba(15, 23, 42, 0.06)", // subtle large card shadow
        inset: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

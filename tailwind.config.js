/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        muted: "var(--muted)",
        border: "var(--border)",
      },
    },
  },
  plugins: [],
};

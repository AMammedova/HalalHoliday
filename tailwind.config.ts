import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./page/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#c19d68",
        beige: "#E8ECD7",
        green: {
          dark: "#1F4529",
          light: "#E8ECD7",
          medium: "#47663B",
        },
        gray: "#616161",
        base: {
          white: "#FFFFFF",
          blur: "rgba(184, 153, 137, 0.48)",
        },
        secondary: {
          "01": "#FCF7F4",
          "02": "#F9F5EB",
          "03": "#E8D6B0",
          "04": "#D6B876",
          "05": "#C49A3B",
          "06": "#B18A35",
          "07": "#93732C",
          "09": "#4F3D17",
          "10": "#3B2E12",
          "11": "#1B1508",
        },
        primary: {
          "11": "#665F5B",
          "09": "#ACA09A",
        },
      },
      screens: {
        "3xl": { max: "1600px" },
        xs: { max: "460px" },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          secondary: "#B18A35",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '5%': '5%',
        '10%': '10%',
        '20%': '20%',
        '23%': '23%',
        '30%': '30%',
        '40%': '40%',
        '48%': '48%',
        '50%': '50%',
        '90%': '90%',
        '200%': '200%',
        '200px': '200px',
        '210px': '210px',
        '150px': '150px',
      },
      flexBasis: {
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
      },
      translate: {
        '0%': '0%',
        '25%': '25%',
        '50%': '50%',
      },
    },
  },
  plugins: [],
}

export default config;
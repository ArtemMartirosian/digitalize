import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font-quicksand": "--font-quicksand",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "blob-one": "blob-one 10s infinite",
        "blob-two": "blob-two 10s infinite",
        "blob-three": "blob-three 5s infinite",
      },
      keyframes: {
        "blob-one": {
          "0%": { left: "0px", bottom: "0px" }, // Starting point
          "25%": { left: "0px", bottom: "300px" }, // Move right
          "50%": { left: "300px", bottom: "300px" }, // Move down
          "75%": { left: "300px", bottom: "0px" }, // Move left
          "100%": { left: "0px", bottom: "0px" }, // Back to starting point
        },
        "blob-two": {
          "0%": { right: "0px", bottom: "0px" }, // Starting point
          "25%": { right: "0px", bottom: "100px" }, // Move right
          "50%": { right: "300px", bottom: "100px" }, // Move down
          "75%": { right: "300px", bottom: "0px" }, // Move right
          "100%": { right: "0px", bottom: "0px" }, // Back to starting point
        },
        "blob-three": {
          "0%": { bottom: "0px" }, // Starting point
          "50%": { bottom: "300px" }, // Move down
          "100%": { bottom: "0px" }, // Back to starting point
        },
      },
      gridTemplateColumns: {
        "dashboard-layout": "220px 1fr",
        "minmax-128": "repeat(auto-fill, minmax(128px, 1fr))",
        "minmax-256": "repeat(auto-fill, minmax(256px, 1fr))",
        "minmax-320": "repeat(auto-fill, minmax(320px, 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default withUt(config);

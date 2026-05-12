import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marketGreen: "#013328",
        marketCream: "#CC8B65",
        marketLight: "#D3DCD2",
        marketDark: "#100C0D",
        market: { green: "#013328", cream: "#CC8B65", light: "#D3DCD2", dark: "#100C0D" },
      },
      fontFamily: { sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"] },
      boxShadow: {
        premium: "0 24px 80px rgba(1, 51, 40, 0.18)",
        soft: "0 20px 60px rgba(16, 12, 13, 0.12)",
        glow: "0 0 44px rgba(204, 139, 101, 0.35)",
      },
      borderRadius: { premium: "2rem" },
      backgroundImage: {
        "premium-radial": "radial-gradient(circle at top left, rgba(204,139,101,.32), transparent 34%), radial-gradient(circle at bottom right, rgba(1,51,40,.32), transparent 36%)",
        "market-gradient": "linear-gradient(135deg, #013328 0%, #100C0D 52%, #CC8B65 130%)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        shimmer: { "0%": { backgroundPosition: "-700px 0" }, "100%": { backgroundPosition: "700px 0" } },
      },
      animation: { float: "float 6s ease-in-out infinite", shimmer: "shimmer 2.2s linear infinite" },
    },
  },
  plugins: [],
};

export default config;

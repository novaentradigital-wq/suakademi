import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#FFFFFF",
          secondary: "#F0F7F9",
          section: "#E8F1F4"
        },
        ink: {
          deep: "#0A4D68",
          dark: "#0D2A35",
          gray: "#5A6B73"
        },
        aqua: {
          DEFAULT: "#088395",
          light: "#05BFDB",
          foam: "#C5F4FF"
        },
        gold: "#C9A961"
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"]
      },
      letterSpacing: {
        tightish: "-0.012em",
        snug: "-0.018em",
        crisp: "-0.025em"
      },
      backgroundImage: {
        "aqua-gradient": "linear-gradient(135deg, #0A4D68 0%, #088395 50%, #05BFDB 100%)",
        "soft-aqua": "linear-gradient(180deg, #FFFFFF 0%, #F0F7F9 100%)",
        "deep-aqua": "linear-gradient(135deg, #0A4D68 0%, #088395 100%)"
      },
      animation: {
        "shimmer": "shimmer 2.5s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
        "spin-slow": "spin 18s linear infinite",
        "scroll-bounce": "scrollBounce 2.4s ease-in-out infinite",
        "wave": "wave 8s ease-in-out infinite"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" }
        },
        wave: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-25px,8px,0)" }
        }
      }
    }
  },
  plugins: []
};
export default config;

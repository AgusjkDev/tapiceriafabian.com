import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{astro,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...fontFamily.sans],
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
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
            animation: {
                spotlight: "spotlight 0.5s ease 0.5s forwards",
                "fade-in-down": "fade-in-down 0.75s ease 0.5s both",
                flip: "flip 6s ease 0.5s infinite",
                border: "border 3s linear infinite",
            },
            keyframes: {
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform:
                            "translate(-50%, -25%) scale(0.5) rotate(55deg)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%, 0%) scale(1) rotate(55deg)",
                    },
                },
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-16px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                },
                flip: {
                    "0%": {
                        transform: "rotateX(0)",
                    },
                    "20%": {
                        transform: "rotateX(0)",
                    },
                    "33.33%": {
                        transform: "rotateX(120deg)",
                    },
                    "53.33%": {
                        transform: "rotateX(120deg)",
                    },
                    "66.66%": {
                        transform: "rotateX(240deg)",
                    },
                    "86.66%": {
                        transform: "rotateX(240deg)",
                    },
                    "100%": {
                        transform: "rotateX(360deg)",
                    },
                },
                border: {
                    from: {
                        "--border-angle": "0deg",
                    },
                    to: {
                        "--border-angle": "360deg",
                    },
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

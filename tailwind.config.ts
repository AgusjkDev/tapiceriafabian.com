import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{astro,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Geist", ...fontFamily.sans],
            },
            fontSize: {
                title: [
                    "clamp(24px, 12vw, 64px)",
                    {
                        fontWeight: "900",
                        lineHeight: "1.2",
                        letterSpacing: "-0.015em",
                    },
                ],
                subtitle: [
                    "clamp(16px, 9vw, 32px)",
                    {
                        fontWeight: "800",
                        lineHeight: "1.1",
                    },
                ],
            },
            animation: {
                "fade-in-down": "fade-in-down 0.5s both",
            },
            keyframes: {
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
            },
        },
    },
    plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{astro,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Geist", ...fontFamily.sans],
            },
        },
    },
    plugins: [],
} satisfies Config;

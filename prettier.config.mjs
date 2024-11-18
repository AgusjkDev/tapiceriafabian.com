/** @type {import("prettier").Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig & import("prettier-plugin-tailwindcss").PluginOptions} */
export default {
    arrowParens: "avoid",
    endOfLine: "crlf",
    tabWidth: 4,
    importOrder: ["<THIRD_PARTY_MODULES>", "", "^@/(.*)$", "", "^[./]"],
    importOrderParserPlugins: ["typescript", "jsx"],
    tailwindFunctions: ["clsx", "cn", "cva", "twMerge"],
    plugins: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier-plugin-astro",
        "prettier-plugin-tailwindcss",
    ],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

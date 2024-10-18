import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { templateCompilerOptions } from "@tresjs/core";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import postcss from "./postcss.config.js";

import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
export default defineConfig({
    base: process.env.VITE_BASE_PATH,
    plugins: [
        vue({
            ...templateCompilerOptions,
        }),
        VueRouter({
            extensions: [".vue", ".md"],
            dts: "src/typed-router.d.ts",
        }),
        AutoImport({
            imports: ["vue", "@vueuse/core", VueRouterAutoImports],
            dts: "src/auto-imports.d.ts",
            dirs: ["src/composables"],
            vueTemplate: true,
            eslintrc: {
                enabled: true, // Default `false`
                filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            },
        }),
        Components({
            extensions: ["vue", "md"],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: "src/components.d.ts",
        }),
    ],
    css: {
        postcss,
    },
    assetsInclude: ["**/*.gltf", "**/*.glb"],
});

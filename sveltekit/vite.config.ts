import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            // Every page is prerendered to build/. 404.html renders +error.svelte for unknown paths.
            adapter: adapter({
                pages: "build",
                assets: "build",
                fallback: "404.html",
                strict: true,
            }),
            prerender: { handleHttpError: "fail" },
        }),
    ],
});

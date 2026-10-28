import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: vitePreprocess(),
    kit: {
        // Every page is prerendered to build/. 404.html renders +error.svelte for unknown paths.
        adapter: adapter({ pages: "build", assets: "build", fallback: "404.html", strict: true }),
        prerender: { handleHttpError: "fail" },
    },
};

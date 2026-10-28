# BuiltChat site templates

Starter projects used by BuiltChat's `create-website` skill when building static websites.
Each folder is one template, released under a tag such as `sveltekit-v1`.

## sveltekit

A static SvelteKit site: SvelteKit 2, Svelte 5, Tailwind CSS v4, shadcn-svelte and Lucide
icons. Every page is prerendered to `build/`, ready to host anywhere as plain files.

```bash
npx degit builtsearch/builtchat-site-templates/sveltekit#sveltekit-v1 site
cd site
pnpm install
pnpm build
```

These files are published from BuiltChat's main repository; changes made here directly
are overwritten.

<script lang="ts">
import { site } from "../../../site.config";

let { title, description = site.description }: { title?: string; description?: string } = $props();
const fullTitle = $derived(title ? `${title} · ${site.name}` : site.name);
</script>

<!-- og:image and twitter:card are added when the site is published. -->
<svelte:head>
   <title>{fullTitle}</title>
   <meta name="description" content={description} />
   <meta property="og:title" content={fullTitle} />
   <meta property="og:description" content={description} />
</svelte:head>

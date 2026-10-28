<script lang="ts">
import { page } from "$app/state";
import Seo from "$lib/components/Seo.svelte";
</script>

<Seo title="Page not found" />

<main>
   <h1>{page.status === 404 ? "Page not found" : "Something went wrong"}</h1>
   <p><a href="/">Back to the home page</a></p>
</main>

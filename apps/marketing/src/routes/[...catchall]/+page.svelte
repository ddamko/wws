<!-- src/routes/[...catchall]/+page.svelte -->
<script>
  import { RenderContent } from '@builder.io/sdk-svelte';
  // import { PUBLIC_BUILDER_API_KEY } from "$env/static/public";
  
  export let data;
  export let content = data.props.content;
</script>
  
<main>
{#if content}
  <!-- Render builder content with all required props -->
  <RenderContent model="page" {content} apiKey={"a3c0473cfc3f4922a401bf0057bdf2c2"} />
{:else}
  Content Not Found
{/if}
</main>
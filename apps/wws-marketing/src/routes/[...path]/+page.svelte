<script lang="ts">
  import { SliceZone } from '@prismicio/svelte'
  import { dev } from '$app/environment'
  import * as prismicHelp from '@prismicio/helpers';

  import * as components from '$lib/slices'

  export let data
</script>

<svelte:head>
	<title>{prismicHelp.asText(data?.document?.data?.title)}</title>
</svelte:head>

{#if !data.document}
  <pre>Looks like you need some data 👀</pre>
{:else}
  <SliceZone slices={data?.document?.data?.body} {components} {dev} />
{/if}

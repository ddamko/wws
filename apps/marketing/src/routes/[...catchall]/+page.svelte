<!-- src/routes/[...catchall]/+page.svelte -->
<script lang="ts">
	import { getContent, RenderContent, type RegisteredComponent } from "@builder.io/sdk-svelte";
	import MyCounterButton from "ui/components/MyCounterButton.svelte";
	// import { PUBLIC_BUILDER_API_KEY } from "$env/static/public";

	export let data;
	export let content = data.props.content;

	export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
		{
      		component: MyCounterButton,
      		name: 'Counter Button',
			image: 'https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png',
			canHaveChildren: false,
			inputs: [
				{
					name: 'text',
					type: 'string',
					defaultValue: 'Button Text',
				}
			]
    	}
	]
</script>

<main>
	{#if content}
		<!-- Render builder content with all required props -->
		<RenderContent model="page" {content} apiKey={"a3c0473cfc3f4922a401bf0057bdf2c2"} customComponents={CUSTOM_COMPONENTS} />
	{:else}
		Content Not Found
	{/if}
</main>

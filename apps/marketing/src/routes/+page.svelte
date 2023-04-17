<script lang="ts">
	import { Header } from "ui";

	import { getContent, RenderContent, getBuilderSearchParams, isEditing, convertSearchParamsToQueryObject } from '@builder.io/sdk-svelte';
	import type { BuilderContent } from "@builder.io/sdk-svelte/package/types/builder-content"
	import { page } from "$app/stores";

	const BUILDER_PUBLIC_API_KEY = 'a3c0473cfc3f4922a401bf0057bdf2c2'; 

	let canShowContent: boolean = false;
	let content: BuilderContent | null | undefined = undefined;

	async function fetchContent() {
		content = await getContent({
		model: 'header',
		apiKey: BUILDER_PUBLIC_API_KEY,
		options: getBuilderSearchParams(
			convertSearchParamsToQueryObject($page.url.searchParams)
		),
		userAttributes: {
			urlPath: $page.url.pathname
		}
		});
		canShowContent = Boolean(content || isEditing());
	};
	fetchContent();
</script>

<Header page_title="Marketing Website" />

{#if canShowContent}
  <RenderContent
    model="header"
    {content}
    apiKey={BUILDER_PUBLIC_API_KEY}
  />
{/if}


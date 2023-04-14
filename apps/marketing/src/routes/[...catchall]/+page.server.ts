import { getContent } from "@builder.io/sdk-svelte";
// import { PUBLIC_BUILDER_API_KEY } from "$env/static/public";

export const load = async ({ params }) => {
	const urlPath = `/${params.catchall}`;

	const content = await getContent({
		model: "page",
		apiKey: "a3c0473cfc3f4922a401bf0057bdf2c2",
		userAttributes: {
			urlPath
		}
	});

	return {
		props: {
			content
		}
	};
};

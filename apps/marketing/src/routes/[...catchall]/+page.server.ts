// src/routes/[...catchall]/+page.server.js
import { getContent } from '@builder.io/sdk-svelte';
import { PUBLIC_BUILDER_API_KEY } from "$env/static/public";

export const load = async ({ params }) => {
  const urlPath = `/${params.catchall}`;

  // fetch your Builder content
  const content = await getContent({
    model: 'page',
    apiKey: PUBLIC_BUILDER_API_KEY,
    userAttributes: {
      urlPath,
    },
  });

  // return content from `getContent()`
  return {
    props: {
      content,
    },
  };
}
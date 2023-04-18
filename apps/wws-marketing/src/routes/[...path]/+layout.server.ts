import createClient from '$lib/prismicio';

export const load = async ({ fetch, request }) => {
  const client = createClient({ fetch, request });

  const { data } = await client.getSingle('settings');

  console.log(data);

  return data;
}
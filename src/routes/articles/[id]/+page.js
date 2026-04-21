import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { articles } from '$lib/stores';


/** @type {import('./$types').PageLoad} */
export function load({ params }) 
{
  const id = params.id;
	const allItems = get(articles);
	const item = allItems.find((i) => i.id === id);

  if (!item) {
    throw error(404, 'Articles item not found');
  }

  return { item };
}
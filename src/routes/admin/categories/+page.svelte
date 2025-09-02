<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<div class="w-full overflow-hidden leading-[0]">
	<svg class="relative block w-full h-16 text-sky-200" 
	     xmlns="http://www.w3.org/2000/svg" 
	     preserveAspectRatio="none" viewBox="0 0 1200 120">
		<path d="M0,0V46.29c47.79,22,103.59,29,158,17,70-15,136-57,206-59,
		         74-2,142,37,218,46,63,8,127-12,186-35,
		         56-21,111-42,171-38,63,4,122,33,185,44,
		         54,10,109,6,159-7V0Z" 
		      fill="currentColor"></path>
	</svg>
</div>

<h1 class="text-4xl font-extrabold text-center text-sky-900 mb-10 tracking-wide font-serif">
	Admin Dashboard
</h1>

<div class="flex justify-center gap-4 mb-10">
	<a href="/admin/categories/new" 
	   class="px-6 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-md hover:bg-sky-700 transition">
		Create Category
	</a>
	<a href="/admin" 
	   class="px-6 py-3 rounded-full bg-gray-600 text-white font-semibold shadow-md hover:bg-gray-700 transition">
		Back to Admin
	</a>
</div>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="flex flex-col gap-6 max-w-2xl mx-auto">
	{#if data.categories.length === 0}
		<p class="text-center text-gray-500 italic">No categories available yet.</p>
	{:else}
		{#each data.categories as category (category.id)}
			<div class="bg-white rounded-2xl p-6 shadow-md border border-sky-100 flex justify-between items-center transition-transform hover:scale-[1.02]" transition:slide>
				<div>
					<p class="text-sky-900 font-semibold">{category.name}</p>
					<p class="text-sm text-gray-500">ID: {category.id}</p>
				</div>
				<form action="?/deleteCategory" method="POST" use:enhance>
					<input type="hidden" name="id" value={category.id} />
					<button type="submit" 
					        class="px-4 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition">
						Delete
					</button>
				</form>
			</div>
		{/each}
	{/if}
</div>
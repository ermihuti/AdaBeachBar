<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 mb-5">Admin Dashboard</h1>

<a href="/admin/categories/new" 
	class="inline-block bg-blue-500 text-white text-lg px-4 py-2 rounded hover:bg-blue-700 transition mb-5">
	Create a New Category
</a>

<div class="flex gap-4 justify-center mb-8">
	<a href="/admin" 
	   class="bg-gray-600 text-white text-lg px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition">
		Back to Admin
	</a>
</div>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="flex flex-col gap-4">
	{#each data.categories as category (category.id)}
		<div class="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105" transition:slide>
			<p class="text-gray-700 text-sm">
				<strong>ID:</strong> {category.id} | 
				<strong>Name:</strong> {category.name}
			</p>
			<form action="?/deleteCategory" method="POST" use:enhance class="flex justify-end mt-3">
				<input type="hidden" name="id" value={category.id} />
				<button type="submit" 
				        class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition">
					Delete
				</button>
			</form>
		</div>
	{/each}
</div>
<script> 
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();

	let filteredProducts = $state(data.products);
	let selectedCategory = $state('all');

	function filterProducts() {
		if (selectedCategory === 'all') {
			filteredProducts = data.products;
		} else {
			filteredProducts = data.products.filter((p) => p.category_id === selectedCategory.id);
		}
	}
</script>

<h1 class="text-5xl font-bold text-center text-gray-800 mb-3 tracking-tight">
	ADA Beach Bar Menu
</h1>

<div class="text-center mb-8">
	<label for="category-filter" class="text-gray-800 text-base mr-2">Choose a category:</label>
	<select id="category-filter" bind:value={selectedCategory} onchange={filterProducts} class="px-3 py-2 text-base border border-gray-300 rounded cursor-pointer focus:border-blue-500">
		<option value="all">All</option>
		{#each data.categories as category}
			<option value={category}>{category.name}</option>
		{/each}
	</select>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
	{#if filteredProducts.length > 0}
	{#each filteredProducts as product (product.id)}
		<div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
			<img 
				src="{product.image}" 
				alt="{product.name}" 
				class="w-full h-64 object-cover"
			/>
			<div class="p-5 space-y-2">
				<p class="text-gray-900 font-bold">{product.categoryName}</p>
				<h2 class="text-xl font-semibold text-gray-800">{product.name}</h2>
				<p class="text-gray-600 text-sm">{product.description}</p>
				<div class="flex justify-between items-center mt-3">
					<span class="text-lg font-bold text-gray-900">{product.price} €</span>
				</div>
			</div>
		</div>
	{/each}
		{:else}
		<p class="text-lg text-gray-500 text-center mt-5">No products available in this category.</p>
	{/if}
</div>
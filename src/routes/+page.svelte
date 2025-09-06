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

<div class="min-h-screen bg-gradient-to-b from-sky-100 via-white to-white font-sans">
	
	<div class="w-full overflow-hidden leading-[0]">
		<svg class="relative block w-full h-16 text-sky-200" 
		     xmlns="http://www.w3.org/2000/svg" 
		     preserveAspectRatio="none" viewBox="0 0 1200 120">
			<path d="M0,0V46.29c47.79,22,103.59,29,158,17,70-15,136-57,206-59,74-2,142,37,218,46,63,8,127-12,186-35,56-21,111-42,171-38,63,4,122,33,185,44,54,10,109,6,159-7V0Z" 
			      fill="currentColor"></path>
		</svg>
	</div>

	<h1 class="text-5xl font-extrabold text-center text-sky-800 mb-12 tracking-wide font-serif">
		ADA Beach Bar Menu
	</h1>

	<div class="text-center mb-12">
		<label for="category-filter" 
		       class="text-sky-900 font-semibold text-lg mr-3">
			Choose a category:
		</label>
		<div class="inline-block relative">
			<select id="category-filter" bind:value={selectedCategory} onchange={filterProducts}
			        class="appearance-none bg-white px-5 py-3 text-base rounded-full border border-sky-300 shadow-md text-sky-800 font-medium cursor-pointer focus:ring-2 focus:ring-sky-400 transition pr-10">
				<option value="all">All</option>
				{#each data.categories as category}
					<option value={category}>{category.name}</option>
				{/each}
			</select>
			<span class="absolute right-4 top-1/2 -translate-y-1/2 text-sky-600 pointer-events-none">
				▼
			</span>
		</div>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 pb-16">
		{#if filteredProducts.length > 0}
			{#each filteredProducts as product (product.id)}
				<div transition:slide 
				     class="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-1 duration-300 border border-sky-100">
					
					<div class="relative">
						<img 
							src="{product.image}" 
							alt="{product.name}" 
							class="w-full h-48 object-cover"
						/>
						<span class="absolute top-3 left-3 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
							{product.categoryName}
						</span>
					</div>

					<div class="p-6 space-y-3">
						<h2 class="text-2xl font-bold text-sky-900 font-serif tracking-wide">
							{product.name}
						</h2>
						<p class="text-gray-600 text-sm leading-relaxed italic">
							{product.description}
						</p>
						<div class="flex justify-end mt-4">
							<span class="text-xl font-bold text-sky-900 bg-sky-100 px-4 py-2 rounded-full shadow-sm border border-sky-200">
								{product.price} €
							</span>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<p class="text-lg text-sky-800 text-center mt-10 italic">
				No products available in this category.
			</p>
		{/if}
	</div>
</div>
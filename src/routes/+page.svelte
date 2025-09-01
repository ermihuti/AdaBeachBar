<script> 
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="text-5xl font-bold text-center text-gray-800 mb-3 tracking-tight">
	ADA Beach Bar Menu
</h1>
<p class="text-center text-gray-500 mb-10 text-lg">
	Go to <a href="/admin" class="text-blue-600 hover:underline">admin</a> page
</p>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
	{#each data.products as product (product.id)}
		<div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
			<img 
				src="{product.image}" 
				alt="{product.name}" 
				class="w-full h-64 object-cover"
			/>
			<div class="p-5 space-y-2">
				<h2 class="text-xl font-semibold text-gray-800">{product.name}</h2>
				<p class="text-gray-600 text-sm">{product.description}</p>
				<div class="flex justify-between items-center mt-3">
					<span class="text-lg font-bold text-gray-900">{product.price} €</span>
				</div>
			</div>
		</div>
	{/each}
</div>
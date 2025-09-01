<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="text-4xl text-center text-gray-800 mb-4">ADA Beach Bar Menu</h1>
<p class="text-center text-gray-600 mb-6 text-lg">Go to <a href="/admin">admin</a> page</p>


<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
		{#each data.products as product (product.id)}
			<div class="bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:-translate-y-1">
				<p class="text-gray-700 text-base">
					<strong class="text-gray-900">Name:</strong> {product.name} |
					<strong class="text-gray-900">Description:</strong> {product.description} |
                    <strong class="text-gray-900">Price:</strong> {product.price} €
				</p>
			</div>
		{/each}
</div>
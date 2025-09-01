<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
	Admin Dashboard
</h1>

<div class="flex gap-4 justify-center mb-8">
	<a href="/" 
	   class="bg-gray-600 text-white text-lg px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition">
		Back to Dashboard
	</a>
	<a href="/admin/new" 
	   class="bg-blue-600 text-white text-lg px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
		Add New Product
	</a>
</div>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
	{#each data.products as product (product.id)}
		<div transition:slide 
		     class="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition">
			<img 
				src="{product.image}" 
				alt="{product.name}" 
				class="w-full h-56 object-cover border-b border-gray-200"
			/>
			<div class="p-4 space-y-2">
				<p class="text-sm text-gray-500">
					<strong>ID:</strong> {product.id}
				</p>
				<h2 class="text-lg font-semibold text-gray-800">{product.name}</h2>
				<p class="text-gray-600 text-sm">{product.description}</p>
				<p class="text-gray-900 font-bold">{product.price} €</p>
				<form action="?/deleteProduct" method="POST" use:enhance 
				      class="flex justify-end mt-3">
					<input type="hidden" name="id" value={product.id} />
					<button type="submit" 
					        class="bg-red-500 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-red-600 transition">
						Delete
					</button>
				</form>
			</div>
		</div>
	{/each}
</div>
<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';
	import Warning from '$lib/components/Warning.svelte';

	let { data, form } = $props();
</script>

<h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
	Add a New Product
</h1>

<div class="flex gap-4 justify-center mb-8">
	<a href="/admin" 
	   class="bg-gray-600 text-white text-lg px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition">
		Back to Admin
	</a>
</div>

<form method="POST" action="?/createProduct" enctype="multipart/form-data" use:enhance
      class="bg-white rounded-xl p-6 shadow-lg max-w-lg w-full mx-auto space-y-5">

	<!-- Image Upload -->
	<div>
		<label for="image" class="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
		<input type="file" name="uploadedImage" id="image"
		       class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
	</div>

	<!-- Name -->
	<div>
		<label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
		<input type="text" name="name" id="name" placeholder="Enter product name" required
		       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>

	<!-- Description -->
	<div>
		<label for="description" class="block text-sm font-medium text-gray-700 mb-2">Description</label>
		<textarea name="description" id="description" placeholder="Enter product description" required
		          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-24 resize-none"></textarea>
	</div>

	<!-- Category -->
	<div class="mb-4">
		<label for="category" class="block text-sm font-medium text-gray-700">Category</label>
		<select name="categoryId" id="category" 
		        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
			{#each data.categories as category (category.id)}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>
	</div>

	<!-- Price -->
	<div>
		<label for="price" class="block text-sm font-medium text-gray-700 mb-2">Price (€)</label>
		<input type="number" name="price" id="price" placeholder="Enter price" required step="0.01" min="0"
		       class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
	</div>

	<!-- Submit -->
	<button type="submit"
	        class="w-full bg-blue-600 text-white text-lg font-medium px-4 py-2.5 rounded-lg shadow hover:bg-blue-700 transition">
		Add Product
	</button>
</form>
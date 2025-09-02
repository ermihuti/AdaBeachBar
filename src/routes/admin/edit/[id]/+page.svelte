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
		<path d="M0,0V46.29c47.79,22,103.59,29,158,17,
		         70-15,136-57,206-59,74-2,142,37,218,46,
		         63,8,127-12,186-35,56-21,111-42,171-38,
		         63,4,122,33,185,44,54,10,109,6,159-7V0Z" 
		      fill="currentColor"></path>
	</svg>
</div>

<h1 class="text-4xl font-extrabold text-center text-sky-900 mb-10 tracking-wide font-serif">
	Edit Product
</h1>

<div class="flex justify-center mb-10">
	<a href="/admin" 
	   class="px-6 py-3 rounded-full bg-gray-600 text-white font-semibold shadow-md hover:bg-gray-700 transition">
		Back to Admin
	</a>
</div>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<form method="POST" action="?/editProduct" enctype="multipart/form-data" use:enhance
      class="bg-white rounded-3xl p-8 shadow-xl max-w-lg w-full mx-auto space-y-6 border border-sky-100">

	{#if data.product.image}
		<img 
			src={data.product.image} 
			alt={data.product.name} 
			class="w-full h-64 object-cover rounded-2xl shadow-md mb-4"
		/>
	{/if}

	<div>
		<label for="image" class="block text-sm font-semibold text-sky-900 mb-2">Change Image</label>
		<input type="file" name="uploadedImage" id="image"
		       class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-sky-400 focus:outline-none shadow-sm" />
	</div>

	<div>
		<label for="name" class="block text-sm font-semibold text-sky-900 mb-2">Name</label>
		<input type="text" name="name" id="name" value={data.product.name}
		       class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-sky-400 focus:outline-none shadow-sm" />
	</div>

	<div>
		<label for="description" class="block text-sm font-semibold text-sky-900 mb-2">Description</label>
		<textarea name="description" id="description" placeholder="Enter product description"
		          class="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:outline-none shadow-sm h-28 resize-none">{data.product.description}</textarea>
	</div>

	<div>
		<label for="category" class="block text-sm font-semibold text-sky-900 mb-2">Category</label>
		<div class="relative">
			<select name="categoryId" id="category" 
			        class="appearance-none w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-sky-400 focus:outline-none shadow-sm text-sky-800 cursor-pointer">
				{#each data.categories as category (category.id)}
					<option value={category.id} selected={category.id === data.product.category_id}>
						{category.name}
					</option>
				{/each}
			</select>
			<span class="absolute right-4 top-1/2 -translate-y-1/2 text-sky-600 pointer-events-none">
				▼
			</span>
		</div>
	</div>

	<div>
		<label for="price" class="block text-sm font-semibold text-sky-900 mb-2">Price (€)</label>
		<input type="number" name="price" id="price" value={data.product.price} step="0.01" min="0"
		       class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-sky-400 focus:outline-none shadow-sm" />
	</div>

	<button type="submit"
	        class="w-full bg-sky-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-sky-700 transition">
		Save Changes
	</button>
</form>
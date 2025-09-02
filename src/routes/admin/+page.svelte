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
			<path d="M0,0V46.29c47.79,22,103.59,29,158,17,70-15,136-57,206-59,74-2,142,37,218,46,63,8,127-12,186-35,56-21,111-42,171-38,63,4,122,33,185,44,54,10,109,6,159-7V0Z" 
			      fill="currentColor"></path>
		</svg>
	</div>

<h1 class="text-4xl font-extrabold text-center text-sky-900 mb-10 tracking-wide font-serif">
	Admin Dashboard
</h1>

<div class="flex flex-wrap gap-4 justify-center mb-12">
	<a href="/" 
	   class="px-6 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-md hover:bg-sky-700 transition">
		Back to Dashboard
	</a>
	<a href="/admin/products/new" 
	   class="px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition">
		Add Product
	</a>
	<a href="/admin/categories/new" 
	   class="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition">
		Add Category
	</a>
	<a href="/admin/categories" 
	   class="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 transition">
		See Categories
	</a>
	<form action="/logout?/logout" method="POST">
		<button
			type="submit"
			class="px-6 py-3 rounded-full bg-red-500 text-white font-semibold shadow-md hover:bg-red-700 transition"
		>
			Logout
		</button>
	</form>
</div>

{#if form && !form.success}
	<Warning message={form.message} />
{/if}

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 pb-16">
	{#each data.products as product (product.id)}
		<div transition:slide 
		     class="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-1 duration-300 border border-sky-100">
			
			<div class="relative">
				<img 
					src="{product.image}" 
					alt="{product.name}" 
					class="w-full h-56 object-cover"
				/>
				<span class="absolute top-3 left-3 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
					{product.categoryName}
				</span>
			</div>

			<div class="p-6 space-y-2">
				<p class="text-sm text-gray-500">
					<strong>ID:</strong> {product.id}
				</p>
				<h2 class="text-xl font-bold text-sky-900 font-serif">{product.name}</h2>
				<p class="text-gray-600 text-sm leading-relaxed">{product.description}</p>
				<p class="text-lg font-semibold text-sky-900 mt-2">{product.price} €</p>

				<form action="?/deleteProduct" method="POST" use:enhance 
				      class="flex justify-end gap-3 pt-4">
					<input type="hidden" name="id" value={product.id} />
					<a href="admin/edit/{product.id}" 
					   class="px-5 py-2 rounded-full bg-yellow-500 text-white text-sm font-semibold shadow hover:bg-yellow-600 transition">
						Edit
					</a>
					<button type="submit" 
					        class="px-5 py-2 rounded-full bg-red-500 text-white text-sm font-semibold shadow hover:bg-red-600 transition">
						Delete
					</button>
				</form>
			</div>
		</div>
	{/each}
</div>
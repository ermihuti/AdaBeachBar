<script>
	let { data } = $props();
</script>

<div class="w-full overflow-hidden leading-[0]">
	<svg class="relative block w-full h-16 text-sky-200" 
	     xmlns="http://www.w3.org/2000/svg" 
	     preserveAspectRatio="none" viewBox="0 0 1200 120">
		<path d="M0,0V46.29c47.79,22,103.59,29,158,17,70-15,136-57,206-59,74-2,142,37,218,46,
		         63,8,127-12,186-35,56-21,111-42,171-38,63,4,122,33,185,44,
		         54,10,109,6,159-7V0Z" 
		      fill="currentColor"></path>
	</svg>
</div>

<h1 class="text-4xl font-extrabold text-center text-sky-900 mb-10 tracking-wide font-serif">
	Create a New Category
</h1>

<div class="flex justify-center gap-4 mb-10">
	<a href="/admin/categories" 
	   class="px-6 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-md hover:bg-sky-700 transition">
		See Categories
	</a>
	<a href="/admin" 
	   class="px-6 py-3 rounded-full bg-gray-600 text-white font-semibold shadow-md hover:bg-gray-700 transition">
		Back to Admin
	</a>
</div>

<form method="POST" action="?/createCategory" 
      class="bg-white rounded-3xl p-8 shadow-xl max-w-md w-full mx-auto space-y-6 border border-sky-100">

	<div>
		<label for="name" class="block text-sm font-semibold text-sky-900 mb-2">Category Name</label>
		<input type="text" id="name" name="name" placeholder="Enter category name" required
		       class="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-sky-400 focus:outline-none shadow-sm" />
	</div>

	<button type="submit" 
	        class="w-full bg-sky-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-sky-700 transition">
		Create Category
	</button>
</form>
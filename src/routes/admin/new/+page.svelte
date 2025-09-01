<h1 class="text-2xl mb-5 font-bold text-center text-gray-800">Add a New Product</h1>

<form method="POST" action="?/createProduct" use:enhance 
      class="bg-white rounded-lg p-5 shadow-md max-w-md w-full mx-auto">
	<div class="mb-4">
		<label for="name" class="block text-sm mb-2 text-gray-600">Name</label>
		<input type="text" placeholder="Enter name" name="name" id="name" required 
		       class="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 outline-none" />
	</div>

	<div class="mb-4">
		<label for="description" class="block text-sm mb-2 text-gray-600">Description</label>
		<textarea placeholder="Enter description" name="description" id="description" required 
		          class="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 outline-none h-20 resize-none"></textarea>
	</div>

    <div class="mb-4">
		<label for="price" class="block text-sm mb-2 text-gray-600">Price</label>
		<input type="number" placeholder="Enter price" name="price" id="price" required 
		       class="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 outline-none" />
	</div>

	<button type="submit" 
	        class="bg-blue-500 text-white text-lg px-4 py-2 rounded w-full hover:bg-blue-700 transition">
		Add Product
	</button>
</form>
<script>
	import Warning from '$lib/components/Warning.svelte';
	export let form;
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

<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4">
	<form
		action="?/login"
		method="POST"
		class="w-full max-w-md space-y-6 rounded-3xl bg-white p-10 shadow-xl border border-sky-100"
	>
		<h1 class="text-center text-4xl font-extrabold text-sky-900 font-serif tracking-wide">
			Login
		</h1>

		<div>
			<label for="username" class="mb-2 block text-sm font-semibold text-sky-900">Username</label>
			<input
				type="text"
				id="username"
				name="username"
				placeholder="Enter your username"
				required
				class="w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
			/>
		</div>

		<div>
			<label for="password" class="mb-2 block text-sm font-semibold text-sky-900">Password</label>
			<input
				type="password"
				id="password"
				name="password"
				placeholder="Enter your password"
				required
				class="w-full rounded-full border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
			/>
		</div>

		<button
			type="submit"
			class="w-full rounded-full bg-sky-600 py-3 text-lg font-semibold text-white shadow-md hover:bg-sky-700 transition"
		>
			Login
		</button>

		{#if form}
			<Warning message={form.message} />
		{/if}

		<div class="mt-2 text-center text-sm text-gray-500">
			<a href="/" class="hover:underline">← Back to Home</a>
		</div>
	</form>
</div>
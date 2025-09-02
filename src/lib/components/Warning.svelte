<script>
	import { slide } from 'svelte/transition';
	const { message } = $props();
</script>

<div class="warning" transition:slide>
	{message}
</div>

<style>
	.warning {
		background: linear-gradient(135deg, #fff3f3, #ffecec);
		color: #b22222;
		border: 1px solid #f08080;
		padding: 12px 18px;
		border-radius: 12px;
		font-size: 15px;
		font-weight: 500;
		margin-bottom: 18px;
		text-align: center;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
		position: relative;
		overflow: hidden;
	}

	.warning::before {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 100%;
		height: 6px;
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f08080' fill-opacity='0.6' d='M0,224L48,202.7C96,181,192,139,288,149.3C384,160,480,224,576,213.3C672,203,768,117,864,101.3C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32V320H0Z'%3E%3C/path%3E%3C/svg%3E") repeat-x;
		background-size: cover;
	}
</style>
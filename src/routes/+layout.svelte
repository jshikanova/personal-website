<script lang="ts">
	import { page } from '$app/stores';
	import { Header, Footer } from '$lib/components';

	import '../app.css';
</script>

<svelte:head>
	<title>Julia Shikanova | Portfolio</title>
	<meta name="description" content="Frontend developer" />
</svelte:head>

<div class="page">
	<Header activeRoute={$page.url.pathname} />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.page {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto 1fr auto;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 64px;
	}
</style>

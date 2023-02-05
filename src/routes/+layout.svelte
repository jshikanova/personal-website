<script>
	import { Header, Footer } from '$components';

	import '../app.css';
</script>

<svelte:head>
	<title>Julia Shikanova | Portfolio</title>
	<meta name="description" content="Frontend developer" />
</svelte:head>

<div class="page">
	<Header />
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
		grid-template-rows: 1fr auto;
	}

	main {
		grid-row: 1;
	}
</style>

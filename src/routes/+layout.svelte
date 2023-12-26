<script lang="ts">
	import { page } from '$app/stores';
	import { Header, Footer, Socials, FluidCSSUnits } from '$lib/components';

	import '../app.css';
</script>

<svelte:head>
	<title>Julia Shikanova | Portfolio</title>
	<meta name="description" content="Julia Shikanova - Frontend developer" />
</svelte:head>

<FluidCSSUnits />

<div class="page">
	<Header activeRoute={$page.url.pathname} />

	<main class="mt-fluid-5 flex flex-col justify-center gap-y-fluid-10 pb-fluid-8 pt-fluid-12">
		<slot />
	</main>

	<Footer>
		<Socials />
	</Footer>
</div>

<style lang="postcss">
	.page {
		min-height: 100vh;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto 1fr auto;
	}
</style>

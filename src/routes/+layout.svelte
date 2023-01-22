<script>
	import { Header, Footer } from '$components';
	import { handleTheme } from '$lib';

	import '../app.css';

	handleTheme();
</script>

<svelte:head>
	<title>Julia Shikanova | Portfolio</title>
	<meta name="description" content="Frontend developer" />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />

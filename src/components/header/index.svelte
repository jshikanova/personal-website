<script>
	import ThemeToggle from './theme-toggle.svelte';
</script>

<header class="header">
	<div class="grid-container">
		<div class="header__wrapper">
			<a class="header__logo" href="/">JS</a>
			<ThemeToggle />
		</div>
	</div>
</header>

<style>
	.header {
		grid-column: 1 / -1;
		position: sticky;
		top: 0;
		z-index: 1;
		padding: 24px 0;
		backdrop-filter: blur(4px) grayscale(1);
	}

	.header__wrapper {
		display: grid;
		grid-template-columns: repeat(2, auto);
		justify-content: space-between;
	}

	.header__logo {
		display: inline-flex;
		font-weight: 600;
		color: var(--primary);
		font-size: 1rem;
		width: 24px;
		height: 24px;
		padding: 5px 0 0 3px;
		background: var(--secondary200);
	}
</style>

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
		padding: 32px 0;
	}

	.header__wrapper {
		display: grid;
		grid-template-columns: repeat(2, auto);
		justify-content: space-between;
	}

	.header__logo {
		width: 36px;
		height: 36px;
		display: grid;
		place-items: center;
		font-weight: 600;
		color: var(--primary);
		font-size: 1.8rem;
		background: var(--accent100);
	}
</style>

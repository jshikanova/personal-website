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
		top: 16px;
		z-index: 1;
	}

	.header__wrapper {
		display: grid;
		grid-template-columns: repeat(2, auto);
		justify-content: space-between;
		padding: 12px 20px;
		margin: 0 -16px;
		border-radius: 24px;
		backdrop-filter: blur(4px);
		border: 1px solid hsla(0, 0%, 0%, 0.15);
	}

	:global(.dark-mode .header__wrapper) {
		border: 1px solid hsla(0, 0%, 100%, 0.15);
	}

	.header__logo {
		display: inline-flex;
		font-weight: 600;
		color: var(--primary);
		font-size: 0.8rem;
		width: 24px;
		height: 24px;
		padding: 7px 0 0 3px;
		background: var(--secondary200);
	}
</style>

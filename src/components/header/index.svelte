<script>
	import { SquareIcon } from 'svelte-feather-icons';

	import ThemeToggle from './theme-toggle.svelte';
</script>

<header class="header">
	<a class="header__logo" href="/">
		<SquareIcon />
	</a>
	<ThemeToggle />
</header>

<style>
	.header {
		grid-row-end: span 2;
		grid-column: 2;
		width: 80px;
		height: 100vh;
		position: sticky;
		top: 0;
		z-index: 1;
		padding: 32px 0 64px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.header__logo {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 600;
		color: var(--accent100);
		font-size: 0.8rem;
	}
</style>

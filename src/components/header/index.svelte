<script>
	import { StarIcon } from 'svelte-feather-icons';

	import ThemeToggle from './theme-toggle.svelte';
</script>

<header class="header">
	<div class="grid-container">
		<div class="header__wrapper">
			<a class="header__logo" href="/">
				<StarIcon />
			</a>
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
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 600;
		color: var(--accent100);
		font-size: 0.8rem;
	}
</style>

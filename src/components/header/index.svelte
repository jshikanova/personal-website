<script>
	import { LoaderIcon } from 'svelte-feather-icons';

	import ThemeToggle from './theme-toggle.svelte';
</script>

<header class="header">
	<div class="container">
		<div class="header__wrapper">
			<a class="header__logo" href="/">
				<LoaderIcon size="24" />
			</a>
			<ThemeToggle />
		</div>
	</div>
</header>

<style>
	.header {
		padding: 64px 0 32px;
	}

	.header__wrapper {
		display: flex;
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

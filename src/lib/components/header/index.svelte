<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';

	export let activeRoute: string;
</script>

<header class="header sticky top-fluid-5 z-10 col-span-full">
	<div class="container">
		<div class="header__wrapper">
			<div class="edge"></div>
			<div class="header__inner-wrapper">
				<a class="logo" href="/" title="JS logo / Go to Home page">
					<span class="logo__text inline-flex origin-bottom-left transition-transform duration-500">
						JS
					</span>
				</a>
				<nav>
					<ul class="flex flex-wrap gap-8 ps-0">
						<li class="inline-flex pb-0">
							<a
								class="link nav-link"
								class:active={activeRoute === '/resume'}
								href="/resume"
								class:nav-link_active={activeRoute === '/resume'}
							>
								Resume
							</a>
						</li>
						<li>
							<a
								class="link nav-link"
								href="mailto:juliashikanova@yandex.ru"
								target="_blank"
								rel="noopener noreferrer"
							>
								Get in touch
							</a>
						</li>
					</ul>
				</nav>
				<ThemeToggle />
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	.header {
		--icon-size: theme(spacing.fluid-6);
	}

	.header__wrapper {
		@apply relative overflow-hidden;
		@apply border dark:border-black-60;

		border-radius: theme(spacing.fluid-8);
	}

	.header__inner-wrapper {
		@apply supports-[backdrop-filter:blur(0)]:bg-transparent supports-[backdrop-filter:blur(0)]:backdrop-blur-md;
		@apply grid items-center justify-between overflow-hidden;
		@apply px-fluid-6 py-fluid-4 text-sm;

		--column: minmax(80px, auto);

		grid-template-columns: repeat(2, var(--column));
		@media screen(sm) {
			grid-template-columns: var(--column) auto var(--column);
		}
	}

	.edge::before,
	.edge::after {
		--offset: 2px;
		--height: 100%;

		@apply absolute inset-0 content-[''];
		@apply h-[--height];

		backdrop-filter: blur(24px) saturate(150%) brightness(1.2);
	}
	.edge::before {
		top: calc(-1 * var(--height) + var(--offset));
	}

	.edge::after {
		top: calc(100% - var(--offset));
	}

	nav {
		@apply hidden sm:block;
	}

	.logo {
		@apply inline-flex items-end justify-start;
		@apply text-xs font-semibold tracking-tighter text-white-100 dark:text-black-900;
		@apply bg-black-800 dark:bg-linen-100;

		--p: calc(var(--icon-size) / 8);

		line-height: 0.71;
		width: var(--icon-size);
		height: var(--icon-size);
		padding: var(--p);
	}

	.logo:hover .logo__text {
		transform: scale(1.3) translateY(calc(var(--p) * -1 * 0.6));
	}

	.nav-link {
		@apply text-black-900 hover:text-orange-100 dark:text-linen-100;
		@apply transition-colors duration-200 ease-in-out;
	}

	.nav-link.active {
		@apply pointer-events-none cursor-default text-orange-100;
	}
</style>

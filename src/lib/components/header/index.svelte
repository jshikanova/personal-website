<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';

	export let activeRoute: string;
</script>

<header class="header sticky top-fluid-5 z-10 col-span-full">
	<div class="container">
		<div class="header__wrapper relative overflow-hidden border dark:border-black-60">
			<div
				class="header__inner-wrapper grid items-center justify-between overflow-hidden px-fluid-6 py-fluid-4 text-sm supports-[backdrop-filter:blur(0)]:bg-transparent supports-[backdrop-filter:blur(0)]:backdrop-blur-sm"
			>
				<a
					class="logo inline-flex items-end justify-start bg-black-800 text-xs font-semibold tracking-tighter text-white-100 dark:bg-linen-100 dark:text-black-900"
					href="/"
					title="JS logo / Go to Home page"
				>
					<span class="logo__text inline-flex origin-bottom-left transition-transform duration-500">
						JS
					</span>
				</a>
				<nav class="hidden sm:block">
					<ul class="flex flex-wrap gap-8 ps-0">
						<li class="inline-flex pb-0">
							<a
								class={'link text-black-900 transition-colors duration-200 ease-in-out hover:text-orange-100 dark:text-linen-100' +
									`${
										activeRoute === '/resume'
											? 'pointer-events-none cursor-default text-orange-100'
											: ''
									}`}
								class:active={activeRoute === '/resume'}
								href="/resume"
							>
								Resume
							</a>
						</li>
						<li>
							<a
								class="link text-black-900 transition-colors duration-200 ease-in-out hover:text-orange-100 dark:text-linen-100"
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
		border-radius: theme(spacing.fluid-8);
	}

	.header__inner-wrapper {
		--column: minmax(80px, auto);

		grid-template-columns: repeat(2, var(--column));
		@media screen(sm) {
			grid-template-columns: var(--column) auto var(--column);
		}
	}

	.logo {
		--p: calc(var(--icon-size) / 8);

		line-height: 0.71;
		width: var(--icon-size);
		height: var(--icon-size);
		padding: var(--p);
	}

	.logo:hover .logo__text {
		transform: scale(1.3) translateY(calc(var(--p) * -1 * 0.6));
	}
</style>

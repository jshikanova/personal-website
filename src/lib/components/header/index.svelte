<script lang="ts">
	import clsx from 'clsx';

	import ThemeToggle from './theme-toggle.svelte';
	import Container from '../container.svelte';

	export let activeRoute: string;
</script>

<header
	class="header sticky top-fluid-5 z-10 col-span-full overflow-hidden [--icon-size:theme(spacing.fluid-6)]"
>
	<Container>
		<div
			class={clsx(
				'grid items-center justify-between',
				'grid-cols-[repeat(2,var(--column))] [--column:minmax(80px,auto)] sm:grid-cols-[var(--column)_auto_var(--column)]',
				'rounded-fluid-6 border px-fluid-6 py-fluid-4 text-sm dark:border-black-60',
				'supports-[backdrop-filter:blur(4px)]:bg-transparent supports-[backdrop-filter:blur(4px)]:backdrop-blur-sm'
			)}
		>
			<a
				class={clsx(
					'group',
					'[--p:calc(var(--icon-size)/8)]',
					'h-[var(--icon-size)] w-[var(--icon-size)] p-[var(--p)]',
					'inline-flex items-end justify-start',
					'text-xs font-semibold leading-[0.71] tracking-tighter text-white-100 dark:text-black-900',
					'bg-black-800 dark:bg-linen-100'
				)}
				href="/"
				title="JS logo / Go to Home page"
			>
				<span
					class={clsx(
						'inline-flex origin-bottom-left transition-transform duration-500',
						'group-hover:translate-y-[calc(var(--p)*-1*0.6)] group-hover:scale-[1.3]'
					)}
				>
					JS
				</span>
			</a>
			<nav class="hidden sm:block">
				<ul class="flex flex-wrap gap-8 ps-0">
					<li class="inline-flex pb-0">
						<a
							class={clsx(
								'text-black-900 hover:text-orange-100 dark:text-linen-100 dark:hover:text-orange-100',
								'transition-colors duration-200 ease-in-out',
								activeRoute === '/resume' &&
									'pointer-events-none cursor-default text-orange-100 dark:text-orange-100'
							)}
							href="/resume"
						>
							Resume
						</a>
					</li>
					<li>
						<a
							class={clsx(
								'text-black-900 hover:text-orange-100 dark:text-linen-100 dark:hover:text-orange-100',
								'transition-colors duration-200 ease-in-out'
							)}
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
	</Container>
</header>

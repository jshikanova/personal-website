<script lang="ts">
	// import { SunIcon, MoonIcon } from 'svelte-feather-icons';

	import { browser } from '$app/environment';
	// import { blur, scale } from 'svelte/transition';

	const darkModeClass = 'dark-mode';
	let checked: boolean = browser ? localStorage.getItem('theme') === 'dark' : false;
	let isStartViewTransition = false;

	$: {
		if (browser)
			isStartViewTransition =
				// @ts-expect-error experimental API
				document.startViewTransition &&
				!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	const setMode = (theme: 'dark' | 'light') => {
		const root = document.documentElement;

		localStorage.setItem('theme', theme);
		theme === 'dark'
			? root.setAttribute('data-mode', 'dark')
			: root.setAttribute('data-mode', 'light');
		root.style.colorScheme = theme;
	};

	/**
	 * Credit to [@antfu](https://github.com/antfu)
	 * @see https://github.com/antfu/antfu.me/blob/main/src/logics/index.ts
	 */
	const toggleTheme = (e: MouseEvent) => {
		if (!isStartViewTransition) {
			checked = !checked;

			setMode(checked ? 'dark' : 'light');

			return;
		}

		const x = e.clientX;
		const y = e.clientY;

		const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

		// @ts-expect-error: Transition API
		const transition = document.startViewTransition(async () => {
			checked = !checked;

			setMode(checked ? 'dark' : 'light');
		});

		transition.ready.then(() => {
			const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
			document.documentElement.animate(
				{
					clipPath: checked ? [...clipPath].reverse() : clipPath
				},
				{
					duration: 1000,
					easing: 'cubic-bezier(0.83, 0, 0.17, 1)',
					pseudoElement: checked ? '::view-transition-old(root)' : '::view-transition-new(root)'
				}
			);
		});
	};
</script>

<input id="theme-toggle" type="checkbox" aria-label="Toggle theme" bind:checked hidden />
<!-- <button class="icon-button" aria-label="Toggle theme" on:click={toggleTheme}> -->
<!-- TODO: Fix flickering on FOUC -->
<!-- {#if checked}
		<div class="icon icon__sun" transition:scale={{ duration: isStartViewTransition ? 0 : 600 }}>
			<SunIcon />
		</div>
	{:else}
		<div class="icon icon__moon" transition:scale={{ duration: isStartViewTransition ? 0 : 600 }}>
			<MoonIcon />
		</div>
	{/if}
</button> -->

<button
	class:toggle-button__checked={checked}
	class="toggle-button"
	type="button"
	on:click={toggleTheme}
></button>

<style lang="postcss">
	.toggle-button {
		position: relative;
		display: flex;
		align-items: center;
		height: 24px;
		width: 48px;
		border-radius: 12px;
		background: var(--accent200);
		border: none;
		z-index: 200;
	}

	.toggle-button::before {
		view-transition-name: toggle-button;
		position: absolute;
		left: 4px;
		right: 0;
		content: '';
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--accent100);
		transition:
			transform,
			background 1s ease-in-out;
		transform: translateX(0px);
	}

	.toggle-button__checked::before {
		transform: translateX(24px);
		background: var(--secondary100);
	}
</style>

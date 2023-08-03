<script lang="ts">
	import { browser } from '$app/environment';

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
					duration: 800,
					easing: 'cubic-bezier(0.83, 0, 0.17, 1)',
					pseudoElement: checked ? '::view-transition-old(root)' : '::view-transition-new(root)'
				}
			);
		});
	};
</script>

<button
	class="toggle-button"
	type="button"
	on:click={toggleTheme}
	aria-label={`Switch to ${checked ? 'light' : 'dark'} theme`}
	title={`Switch to ${checked ? 'light' : 'dark'} theme`}
></button>

<style lang="postcss">
	.toggle-button {
		cursor: pointer;
		position: relative;
		display: flex;
		align-items: center;
		height: 24px;
		width: 48px;
		border-radius: 12px;
		background: transparent;
		border: 1px solid hsla(0, 0%, 0%, 0.15);
	}

	.toggle-button::before {
		/* view-transition-name to prevent applying global clip-path animation  */
		view-transition-name: toggle-button-switch;
		position: absolute;
		left: 4px;
		right: 0;
		content: '';
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--secondary100);
		transition:
			background,
			transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
		transform: translateX(24px);
	}

	:global([data-mode='dark']) .toggle-button {
		border: 1px solid hsla(0, 0%, 100%, 0.15);
	}

	:global([data-mode='dark']) .toggle-button::before {
		transform: translateX(0);
	}
</style>

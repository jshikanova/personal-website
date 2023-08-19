<script lang="ts">
	import { SunIcon, MoonIcon } from 'svelte-feather-icons';

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

<div class="toggle-button-wrapper">
	<button
		class="toggle-button"
		type="button"
		on:click={toggleTheme}
		aria-label={`Switch to ${checked ? 'light' : 'dark'} theme`}
		title={`Switch to ${checked ? 'light' : 'dark'} theme`}
	>
		<div class="toggle-button__icon toggle-button__icon_moon">
			<MoonIcon size="10" />
		</div>
		<div class="toggle-button__icon toggle-button__icon_sun">
			<SunIcon size="10" />
		</div>
	</button>
</div>

<style lang="postcss">
	.toggle-button-wrapper {
		border: 1px solid var(--border);
		border-radius: 16px;
		transition:
			border-color,
			box-shadow 0.3s ease-in-out;
	}

	.toggle-button-wrapper:hover {
		border-color: var(--border-hover);
		overflow: hidden;
		box-shadow: var(--glow50) var(--accent200-hover);
	}

	.toggle-button {
		/* view-transition-name to prevent applying global clip-path animation  */
		view-transition-name: toggle-button;
		padding: 2px 7px;
		cursor: pointer;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 22px;
		width: 48px;
		background: transparent;
		border: none;
	}

	.toggle-button__icon {
		z-index: 10;
		position: relative;

		transition: color 0.2s ease-in-out;
	}

	:global([data-mode='dark']) .toggle-button__icon {
		color: black;
	}

	.toggle-button__icon_moon,
	:global([data-mode='dark']) .toggle-button__icon_sun {
		color: var(--black-coral);
	}

	.toggle-button__icon_sun,
	:global([data-mode='dark']) .toggle-button__icon_moon {
		color: var(--white);
	}

	.toggle-button::before {
		--easing: cubic-bezier(0.215, 0.61, 0.355, 1);

		position: absolute;
		left: 4px;
		right: 0;
		content: '';
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--accent100);
		transition:
			background,
			transform 0.8s var(--easing);
		transform: translateX(24px);
	}

	:global([data-mode='dark']) .toggle-button::before {
		transform: translateX(0);
	}
</style>

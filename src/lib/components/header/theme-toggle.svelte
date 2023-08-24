<script lang="ts">
	import { browser } from '$app/environment';
	import { SunIcon, MoonIcon, MonitorIcon } from 'svelte-feather-icons';

	type Theme = 'system' | 'dark' | 'light';
	type Scheme = Exclude<Theme, 'system'>;
	type ToggleButton = {
		theme: Theme;
		Icon: App.Icon;
	};

	const toggleButtons: ToggleButton[] = [
		{ theme: 'dark', Icon: MoonIcon },
		{ theme: 'light', Icon: SunIcon },
		{ theme: 'system', Icon: MonitorIcon }
	];

	const getTheme = () => (browser ? (localStorage?.getItem('theme') as Theme) : 'system');

	let theme = getTheme();

	const getSystemTheme = (theme: Theme): Scheme => {
		if (theme !== 'system') {
			return theme;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};

	const setTheme = (theme: Theme) => {
		const currentTheme = theme !== 'system' ? theme : getSystemTheme(theme);
		const root = document.documentElement;

		localStorage.setItem('theme', theme);
		root.setAttribute('data-scheme', currentTheme);
		root.style.colorScheme = currentTheme;
	};

	/**
	 * Credit to [@antfu](https://github.com/antfu)
	 * @see https://github.com/antfu/antfu.me/blob/main/src/logics/index.ts
	 */
	const toggleTheme = (selectedTheme: Theme, e?: MouseEvent) => {
		if (selectedTheme === theme) return;

		let scheme: Scheme = getSystemTheme(selectedTheme);
		const prevScheme: Scheme = getSystemTheme(theme);
		theme = selectedTheme;

		if (
			scheme === prevScheme ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
			// @ts-expect-error experimental API
			!document.startViewTransition
		) {
			setTheme(theme);

			return;
		}

		// @ts-expect-error: Transition API
		const transition = document.startViewTransition(async () => {
			setTheme(theme);
		});

		transition.ready.then(() => {
			const x = e?.clientX || innerWidth;
			const y = e?.clientY || 0;

			const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

			const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
			document.documentElement.animate(
				{
					clipPath: scheme === 'dark' ? [...clipPath].reverse() : clipPath
				},
				{
					duration: 800,
					easing: 'cubic-bezier(0.83, 0, 0.17, 1)',
					pseudoElement:
						scheme === 'dark' ? '::view-transition-old(root)' : '::view-transition-new(root)'
				}
			);
		});
	};

	if (browser)
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', () => toggleTheme(getTheme()));
</script>

<div class="toggle-button-wrapper">
	{#each toggleButtons as { theme: buttonTheme, Icon }, index}
		<button
			data-index={index + 1}
			class="toggle-button"
			class:toggle-button_active={theme === buttonTheme}
			title={`Switch to ${buttonTheme} theme`}
			on:click={(e) => toggleTheme(buttonTheme, e)}
		>
			<Icon size="14" />
		</button>
	{/each}
</div>

<style lang="postcss">
	.toggle-button-wrapper {
		view-transition-name: toggle-button;
		display: flex;
		gap: 4px;
		position: relative;
	}

	.toggle-button-wrapper:has(> .toggle-button_active[data-index='1'])::before {
		transform: translateX(0);
	}

	.toggle-button-wrapper:has(> .toggle-button_active[data-index='2'])::before {
		transform: translateX(28px);
	}

	.toggle-button-wrapper:has(> .toggle-button_active[data-index='3'])::before {
		transform: translateX(56px);
	}

	.toggle-button-wrapper::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		height: 24px;
		background: var(--accent200);
		border-radius: 4px;
		z-index: 5;
		transition: transform ease-in-out 0.5s;
		will-change: translate;
	}

	.toggle-button {
		width: 24px;
		height: 24px;
		background-color: transparent;
		z-index: 10;
		position: relative;
		color: var(--black-coral);
		border: 1px solid var(--border);
		border-radius: 4px;
		padding: 4px;
		cursor: pointer;
		transition:
			color 0.5s ease-in-out,
			box-shadow 0.5s ease-in-out;
	}

	:global([data-scheme='dark']) .toggle-button {
		color: var(--black-coral);
	}

	.toggle-button_active,
	:global([data-scheme='dark']) .toggle-button_active {
		color: var(--white);
		pointer-events: none;
		cursor: default;
	}

	:global([data-scheme='dark']) .toggle-button_active {
		color: var(--eerie-black);
	}

	.toggle-button:hover {
		border-color: var(--border-hover);
		box-shadow: var(--glow50) var(--accent200-hover);
	}
</style>

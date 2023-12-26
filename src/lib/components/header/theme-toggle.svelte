<script lang="ts">
	import { browser } from '$app/environment';
	import { SunIcon, MoonIcon, MonitorIcon } from 'svelte-feather-icons';

	type Theme = 'system' | 'dark' | 'light';
	type Scheme = Exclude<Theme, 'system'>;
	type ToggleButton = { theme: Theme; Icon: App.Icon };

	const toggleButtons: ToggleButton[] = [
		{ theme: 'dark', Icon: MoonIcon },
		{ theme: 'light', Icon: SunIcon },
		{ theme: 'system', Icon: MonitorIcon }
	];

	const getTheme = () => (browser ? (localStorage?.getItem('theme') as Theme) : 'system');

	let theme = getTheme();

	const getScheme = (theme: Theme): Scheme => {
		if (theme !== 'system') {
			return theme;
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};

	const setTheme = (theme: Theme) => {
		const currentTheme = theme !== 'system' ? theme : getScheme(theme);
		const root = document.documentElement;

		localStorage.setItem('theme', theme);
		root.setAttribute('data-theme', theme);
		root.setAttribute('data-scheme', currentTheme);
		root.style.colorScheme = currentTheme;
	};

	/**
	 * Credit to [@antfu](https://github.com/antfu)
	 * @see https://github.com/antfu/antfu.me/blob/main/src/logics/index.ts
	 */
	const toggleTheme = (selectedTheme: Theme, e?: MouseEvent) => {
		let scheme: Scheme = getScheme(selectedTheme);
		const prevScheme: Scheme = getScheme(theme);
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

<svelte:head>
	<script>
		const themes = ['system', 'light', 'dark'];
		let theme = localStorage.getItem('theme');
		theme = themes.includes(theme) ? theme : themes[0];

		const root = document.documentElement;

		const setTheme = (mode) => {
			localStorage.setItem('theme', mode);
			root.style.colorScheme = mode;
			root.setAttribute('data-theme', mode);

			root.setAttribute('data-theme', mode);
			root.setAttribute(
				'data-scheme',
				mode === 'system'
					? window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light'
					: mode
			);
		};

		setTheme(theme);
	</script>
</svelte:head>

<div class="toggle-button-wrapper relative flex">
	{#each toggleButtons as { theme, Icon }}
		<button
			class="toggle-button"
			title={`Switch to ${theme} theme`}
			on:click={(e) => toggleTheme(theme, e)}
			data-theme={theme}
		>
			<Icon size="18" />
		</button>
	{/each}
</div>

<style lang="postcss">
	.toggle-button-wrapper {
		--gap: 6px;

		view-transition-name: toggle-button;
		gap: var(--gap);
	}

	:global([data-theme='dark']) .toggle-button-wrapper {
		--index: 0;
	}

	:global([data-theme='light']) .toggle-button-wrapper {
		--index: 1;
	}

	:global([data-theme='system']) .toggle-button-wrapper {
		--index: 2;
	}

	.toggle-button-wrapper::before {
		background-color: theme(backgroundColor.blue.800);

		content: '';
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 4px;
		width: var(--icon-size);
		height: var(--icon-size);
		z-index: 5;
		transition: transform ease-in-out 0.5s;
		will-change: translate;
		transform: translateX(calc(var(--index) * (var(--icon-size) + var(--gap))));
	}

	:global([data-scheme='dark']) .toggle-button-wrapper::before {
		background-color: theme(backgroundColor.lightblue.200);
	}

	.toggle-button {
		position: relative;
		z-index: theme(zIndex.10);
		display: inline-flex;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-inline: theme(spacing.fluid-2);
		background-color: theme(backgroundColor.transparent);
		border-radius: 4px;
		border: 1px solid theme(borderColor.DEFAULT);
		color: theme(textColor.black.100);
		transition: colors ease-in-out 0.2s;
		width: var(--icon-size);
		height: var(--icon-size);
	}

	:global([data-scheme='dark']) .toggle-button {
		color: theme(textColor.white.100);
		border-color: theme(borderColor.black.60);
	}

	:global([data-theme='dark']) .toggle-button[data-theme='dark'],
	:global([data-theme='light']) .toggle-button[data-theme='light'],
	:global([data-theme='system']) .toggle-button[data-theme='system'] {
		pointer-events: none;
		cursor: default;
	}

	:global([data-theme='dark']) .toggle-button[data-theme='dark'],
	:global([data-theme='system'][data-scheme='dark']) .toggle-button[data-theme='system'] {
		color: theme(textColor.black.800);
	}
	:global([data-theme='light']) .toggle-button[data-theme='light'],
	:global([data-theme='system'][data-scheme='light']) .toggle-button[data-theme='system'] {
		color: theme(textColor.white.100);
	}
</style>

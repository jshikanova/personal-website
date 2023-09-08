<script lang="ts">
	import ThemeToggle from './theme-toggle.svelte';

	export let activeRoute: string;
</script>

<header class="header">
	<div class="grid-container">
		<div class="header__wrapper">
			<a class="logo" href="/" title="JS logo / Go to Home page">
				<span class="logo__text">JS</span>
			</a>
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li class="header__nav-item">
						<a
							class="link header__nav-link"
							href="/resume"
							class:header__nav-link_active={activeRoute === '/resume'}
						>
							Resume
						</a>
					</li>
					<li class="header__nav-item">
						<a
							class="link header__nav-link"
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
</header>

<style lang="postcss">
	.header {
		--icon-size: clamp(24px, 2vw, 30px);

		grid-column: 1 / -1;
		position: sticky;
		top: var(--header-offset-top);
		z-index: 1;
		overflow: hidden;
	}

	.header__wrapper {
		--px: clamp(20px, 1.428vw, 30px);
		--py: clamp(12px, 0.857vw, 18px);

		display: grid;
		grid-template-columns: minmax(80px, auto) auto minmax(80px, auto);
		justify-content: space-between;
		align-items: center;
		padding: var(--py) var(--px);
		/* margin: 0 calc(var(--column-gap) * -1); */
		border-radius: clamp(24px, 1.8vw, 32px);
		border: 1px solid var(--border);
		font-size: var(--sm-font-size);
	}

	@supports (backdrop-filter: blur(4px)) {
		.header__wrapper {
			background-color: transparent;
			backdrop-filter: blur(4px);
		}
	}

	.logo {
		--p: calc(var(--icon-size) / 8);

		display: inline-flex;
		justify-content: flex-start;
		align-items: flex-end;
		font-weight: 600;
		line-height: 0.71;
		color: var(--primary);
		font-size: var(--xs-font-size);
		letter-spacing: -0.5px;
		width: var(--icon-size);
		height: var(--icon-size);
		padding: var(--p);
		background: var(--secondary200);
	}

	.logo__text {
		display: inline-flex;
		transform-origin: bottom left;
		transition: transform 0.5s ease-in-out;
	}

	.logo:hover .logo__text {
		transform: scale(1.15) translateY(calc(var(--p) * -1));
	}

	.header__nav-list {
		padding-left: 0;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 32px;
	}

	.header__nav-item {
		display: inline-flex;
		padding-bottom: 0;
	}

	.header__nav-link {
		color: var(--secondary200);
		transition: color var(--transition-settings);
	}

	.header__nav-link:hover {
		color: var(--accent100);
	}

	.header__nav-link_active {
		color: var(--accent100);
		pointer-events: none;
		cursor: default;
	}
</style>

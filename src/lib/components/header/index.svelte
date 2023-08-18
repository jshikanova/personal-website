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
		grid-column: 1 / -1;
		position: sticky;
		top: var(--header-offset-top);
		z-index: 1;
		overflow: hidden;
	}

	.header__wrapper {
		display: grid;
		grid-template-columns: repeat(3, auto);
		justify-content: space-between;
		align-items: center;
		padding: 12px 20px;
		margin: 0 -16px;
		border-radius: 24px;
		border: 1px solid var(--border);
	}

	@supports (backdrop-filter: blur(4px)) {
		.header__wrapper {
			background-color: transparent;
			backdrop-filter: blur(4px);
		}
	}

	.logo {
		display: inline-flex;
		justify-content: flex-start;
		align-items: flex-end;
		font-weight: 600;
		line-height: 0.71;
		color: var(--primary);
		font-size: 0.8rem;
		letter-spacing: -0.5px;
		width: 24px;
		height: 24px;
		padding: 3px;
		background: var(--secondary200);
	}

	.logo__text {
		display: inline-flex;
		transform-origin: bottom left;
		transition: transform 0.5s ease-in-out;
	}

	.logo:hover .logo__text {
		transform: scale(1.2) translateY(-3px);
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
		font-size: 0.9rem;
	}

	.header__nav-link_active {
		color: var(--accent100);
		pointer-events: none;
		cursor: default;
	}
</style>

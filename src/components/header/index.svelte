<script>
	import ThemeToggle from './theme-toggle.svelte';
</script>

<header class="header">
	<div class="grid-container">
		<div class="header__wrapper">
			<a class="header__logo" href="/">JS</a>
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li class="header__nav-item">
						<a class="link header__nav-link" href="/resume">Resume</a>
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

<style>
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
		border: 1px solid hsla(0, 0%, 0%, 0.15);
		background-color: var(--primary);
	}

	@supports (backdrop-filter: blur(4px)) {
		.header__wrapper {
			background-color: transparent;
			backdrop-filter: blur(4px);
		}
	}

	:global(.dark-mode .header__wrapper) {
		border: 1px solid hsla(0, 0%, 100%, 0.15);
	}

	.header__logo {
		display: inline-flex;
		font-weight: 600;
		color: var(--primary);
		font-size: 0.8rem;
		width: 24px;
		height: 24px;
		padding: 7px 0 0 3px;
		background: var(--secondary200);
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
</style>

<footer class="footer">
	<div class="grid-container">
		<div class="footer__wrapper">
			<div class="footer__text">
				Build with
				<a
					class="footer__svelte-link"
					href="https://kit.svelte.dev/"
					title="Svelte Kit"
					target="_blank"
					rel="noopener noreferrer"
				>
					SvelteKit
				</a>
			</div>
			<div class="footer__text">
				Made with <span aria-label="sparks">✨</span>
				by Julia Shikanova
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 32px 0 64px 0;
	}

	.footer__wrapper {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		flex-wrap: wrap;
	}

	.footer__text {
		font-size: 0.9rem;
		color: var(--secondary100);
	}

	.footer__svelte-link {
		color: var(--accent100);
	}
</style>

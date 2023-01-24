<footer class="footer">
	<div class="grid-container">
		<div class="footer__wrapper">
			<div class="footer__text">
				Designed and
				<a
					class="link"
					href="https://github.com/jshikanova/personal-website"
					title="Github repository"
					target="_blank"
					rel="noopener noreferrer"
				>
					coded
				</a>
				with <span aria-label="sparks">✨</span>
				by Julia Shikanova <span aria-label="Woman Technologist">👩‍💻</span>. Built with
				<a
					class="link link_accent"
					href="https://kit.svelte.dev/"
					title="Svelte Kit"
					target="_blank"
					rel="noopener noreferrer"
				>
					SvelteKit
				</a>
			</div>
			<div class="footer__text" />
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 32px 0 64px 0;
	}

	.footer__wrapper {
		display: flex;
		justify-content: flex-end;
		gap: 8px;
		flex-wrap: wrap;
	}

	.footer__text {
		font-size: 1rem;
		color: var(--secondary100);
	}
</style>

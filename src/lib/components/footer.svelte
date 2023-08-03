<footer class="footer">
	<div class="grid-container">
		<div class="footer__wrapper">
			<div>
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
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 32px 0 48px 0;
		grid-column: 1 / -1;
	}

	.footer__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 0.9rem;
	}
</style>

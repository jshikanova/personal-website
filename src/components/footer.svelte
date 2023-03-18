<footer class="footer">
	<div class="grid-container">
		<div class="footer__wrapper">
			<nav class="footer__nav">
				<ul class="footer__nav-list">
					<li class="footer__nav-item"><a class="link" href="/resume">Resume</a></li>
					<li>
						<a
							class="link"
							href="mailto:juliashikanova@yandex.ru"
							target="_blank"
							rel="noopener noreferrer"
						>
							Get in touch
						</a>
					</li>
				</ul>
			</nav>
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
		align-items: flex-end;
		gap: 16px;
		font-size: 1rem;
	}

	.footer__nav-list {
		padding-left: 0;
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
	}

	.footer__nav-item {
		padding-bottom: 0;
	}
</style>

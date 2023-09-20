<footer class="col-span-full pb-fluid-9 pt-fluid-7">
	<div class="container">
		<div class="flex flex-col gap-fluid-6 text-xs sm:items-center">
			<nav class="sm:hidden">
				<a class="link" href="/resume">Resume</a>
			</nav>
			<div>
				<slot />
			</div>
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
				by Julia Shikanova <span aria-label="Woman Technologist">👩‍💻</span>.
				Built with
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

<script lang="ts">
	import Container from './container.svelte';
	import Link from './link.svelte';
</script>

<footer class="col-span-full pb-fluid-9 pt-fluid-7">
	<Container>
		<div class="flex flex-col gap-fluid-6 text-xs sm:items-center">
			<nav class="sm:hidden">
				<Link href="/resume">Resume</Link>
			</nav>
			<div>
				<slot />
			</div>
			<div>
				<Link
					href="https://github.com/jshikanova/personal-website"
					title="Github repository"
					isOuter
				>
					Crafted
				</Link>
				with care and a touch of <span aria-label="sparkles" title="sparkles">✨</span> using <Link
					href="https://kit.svelte.dev/"
					title="Svelte Kit"
					variant="accent"
				>
					SvelteKit
				</Link>
			</div>
		</div>
	</Container>
</footer>

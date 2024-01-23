<script lang="ts">
	import { NAVIGATION_LINKS } from '$lib/helpers';

	import Container from './container.svelte';
	import Link from './link.svelte';
</script>

<footer class="col-span-full pb-fluid-9 pt-fluid-7">
	<Container>
		<div class="flex flex-col gap-fluid-6 text-xs sm:items-center">
			<nav class="flex gap-fluid-5 sm:hidden">
				{#each NAVIGATION_LINKS as navLink}
					<Link href={navLink.url}>{navLink.title}</Link>
				{/each}
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

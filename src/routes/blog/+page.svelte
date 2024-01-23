<script lang="ts">
	import { Container, Link } from '$lib/components';
	import { formatDate } from '$lib/helpers';

	export let data;
</script>

<svelte:head>
	<title>Julia Shikanova | Blog</title>
</svelte:head>

<Container class="gap-y-fluid-8">
	<h1>Blog</h1>
	<section>
		<ul class="ps-0">
			{#each data.posts as { date, description, slug, title, type }}
				<li class="">
					<h2 class="pb-fluid-4">
						<Link href={`blog/${slug}`}>
							{title}
						</Link>
					</h2>
					<p class="description">{description}</p>
					<div class="flex items-center gap-4 pt-fluid-4">
						<p class="text-sm text-white-100 text-opacity-70">{formatDate(date)}</p>
						<p
							class="rounded-md bg-orange-200 px-2 py-1 font-monospace text-sm font-semibold leading-tight"
						>
							{type}
						</p>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</Container>

<script lang="ts">
	import { Container } from '$lib/components';
	import { formatDate } from '$lib/helpers';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Container>
	<div>
		<article class="mx-auto w-[65ch] max-w-[clamp(0px,65ch,100%)]">
			<hgroup>
				<h1 class="pb-fluid-2">{data.meta.title}</h1>
				<p class="pb-fluid-10 text-blue-800 dark:text-lightblue-100">
					Published at {formatDate(data.meta.date)}
				</p>
			</hgroup>

			<div class="post-content">
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</Container>

<script lang="ts">
	import { Hero, GithubContributions, Demos } from '$lib/components';

	export let data;

	const { user: githubData } = data;
</script>

<Hero />

<Demos />

{#if githubData}
	<GithubContributions contributions={githubData?.contributionsCollection.contributionCalendar} />
{/if}

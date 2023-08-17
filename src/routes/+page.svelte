<script lang="ts">
	import { Hero, GithubContributions } from '$lib/components';

	export let data;

	const { user: githubData } = data;
</script>

<Hero />

{#if githubData}
	<GithubContributions contributions={githubData?.contributionsCollection.contributionCalendar} />
{/if}

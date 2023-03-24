<script>
	import { Hero, GithubContributions } from '$components';

	export let data;
	const { user: githubData } = data;
</script>

<Hero />
{#if githubData}
	<GithubContributions contributions={githubData?.contributionsCollection.contributionCalendar} />
{/if}

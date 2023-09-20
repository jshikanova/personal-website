<script lang="ts">
	import { onMount } from 'svelte';
	import type { ContributionsResponse } from '../../routes/proxy+page.server';

	export let contributions: ContributionsResponse['data']['user']['contributionsCollection']['contributionCalendar'];

	const calcStreak = () => {
		const contributionsCounter: Array<number> = contributions.weeks
			.map((week) =>
				week.contributionDays.map(({ contributionCount }) => contributionCount)
			)
			.flat()
			.reverse();

		if (contributionsCounter[0] === 0) contributionsCounter.shift();

		return contributionsCounter.findIndex((count) => count === 0);
	};

	const streak = calcStreak();

	//  TODO: Remove any
	const alternativeColors = {
		'#ebedf0': 'var(--github-100)',
		'#9be9a8': 'var(--github-200)',
		'#40c463': 'var(--github-300)',
		'#30a14e': 'var(--github-400)',
		'#216e39': 'var(--github-500)'
	} as any;

	// type ColorKeys = keyof typeof colors;

	let contributionsList: HTMLElement;

	onMount(() => {
		if (contributionsList.scrollWidth > contributionsList.clientWidth) {
			contributionsList.scrollTo({
				left: contributionsList.scrollWidth,
				behavior: 'smooth'
			});
		}
	});
</script>

<div class="container">
	<div class="contributions__wrapper grid gap-fluid-4 text-sm">
		<div
			class="flex flex-col-reverse items-start justify-between gap-x-fluid-6 gap-y-fluid-2 sm:flex-row"
		>
			<p class="text-blue-800 dark:text-lightblue-200">
				{contributions.totalContributions} contributions in the last year
			</p>
			<a
				class="link text-blue-800 dark:text-lightblue-200"
				href="https://github.com/jshikanova"
				target="_blank"
				rel="noopener noreferrer"
				title="Github profile"
			>
				Github
			</a>
		</div>
		<div
			bind:this={contributionsList}
			class="grid grid-cols-[repeat(var(--weeks),var(--size))] gap-[var(--gap)] overflow-x-auto"
		>
			{#each contributions.weeks as week}
				<div class="grid grid-rows-[repeat(7,var(--size))] gap-[var(--gap)]">
					{#each week.contributionDays as { contributionCount, color, date }}
						<div
							style="background-color: {alternativeColors[color]}"
							class="lalala aspect-square rounded-sm"
							title={`${
								contributionCount === 1
									? '1 contribution'
									: `${
											contributionCount === 0 ? 'No' : contributionCount
									  } contributions`
							} on ${new Date(date).toLocaleDateString('en-us', {
								weekday: 'long',
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}`}
						/>
					{/each}
				</div>
			{/each}
		</div>
		<div
			class="flex flex-col items-start justify-between gap-x-fluid-6 gap-y-fluid-2 sm:flex-row"
		>
			<p class="text-blue-800 dark:text-lightblue-200">
				{#if streak > 0}
					<b>Current streak:</b> {streak} {streak === 1 ? 'day' : 'days'}
				{:else}
					Not on streak
				{/if}
			</p>
			<div
				class="grid grid-cols-[min-content_repeat(5,_var(--size))_min-content] gap-[var(--gap)]"
			>
				<span class="leading-none text-black-100 dark:text-linen-200">Less</span
				>
				{#each Object.values(alternativeColors) as color}
					<div
						class="aspect-square rounded-sm"
						style="background-color: {color}"
					/>
				{/each}
				<span class="leading-none text-black-100 dark:text-linen-200">More</span
				>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.contributions__wrapper {
		--weeks: 53;
		--gap: 0.25rem;
		--size: clamp(0.875rem, calc(100vw / 53 - var(--gap)), 2rem);

		--github-100: theme(colors.white.90);
		--github-200: theme(colors.lilac.100);
		--github-300: theme(colors.lilac.200);
		--github-400: theme(colors.lilac.300);
		--github-500: theme(colors.lilac.400);
	}

	:global([data-scheme='dark']) .contributions__wrapper {
		--github-100: theme(colors.white.10);
	}

	@supports (container-type: inline-size) {
		.contributions__wrapper {
			--size: clamp(0.875rem, calc(100cqi / 53 - var(--gap)), 2rem);
		}
	}
</style>

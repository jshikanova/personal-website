<script lang="ts">
	import { GithubIcon } from 'svelte-feather-icons';

	import type { ContributionsResponse } from '../routes/proxy+page.server';

	export let contributions: ContributionsResponse['data']['user']['contributionsCollection']['contributionCalendar'];

	const streak = contributions.weeks
		.map((week) => week.contributionDays.map(({ contributionCount }) => contributionCount))
		.flat()
		.reverse()
		.findIndex((count) => count === 0);

	//  TODO: Remove any
	const alternativeColors = {
		'#ebedf0': 'var(--github100)',
		'#9be9a8': 'var(--github200)',
		'#40c463': 'var(--github300)',
		'#30a14e': 'var(--github400)',
		'#216e39': 'var(--github500)'
	} as any;

	// type ColorKeys = keyof typeof colors;
</script>

<div class="contributions">
	<div class="grid-container">
		<div class="contributions__wrapper">
			<div class="contributions__header">
				<p class="contributions__subtitle">
					{contributions.totalContributions} contributions in the last year
				</p>
				<a
					class="contributions__link"
					href="https://github.com/jshikanova"
					target="_blank"
					rel="noopener noreferrer"
					title="Github"
				>
					<GithubIcon size="16" class="contributions__icon" />
				</a>
			</div>
			<div class="contributions__list contributions__list_scroll">
				{#each contributions.weeks as week}
					<div class="contributions__week">
						{#each week.contributionDays as { contributionCount, color, date }}
							<div
								style="background-color: {alternativeColors[color]}"
								class="contributions__day contributions__day_{contributionCount}"
								title={`${
									contributionCount === 0 ? 'No' : contributionCount
								} contributions on ${new Date(date).toLocaleDateString('en-us', {
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
			<div class="contributions__footer">
				<p class="contributions__subtitle">
					{#if streak > 0}
						Current streak: {streak} days
					{:else}
						Not on streak
					{/if}
				</p>
				<div class="contributions__colors">
					<span class="contributions__caption">Less</span>
					{#each Object.values(alternativeColors) as color}
						<div class="contributions__day" style="background-color: {color}" />
					{/each}
					<span class="contributions__caption">More</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* .contributions {} */

	.contributions__wrapper {
		--size: 11.664px;
		--gap: 3px;

		display: grid;
		gap: 16px;
	}

	.contributions__header {
		display: grid;
		grid-auto-flow: column;
		gap: 24px;
		justify-content: space-between;
		align-items: center;
	}

	.contributions__link {
		padding: 3px;
		border-radius: 4px;
		color: var(--accent200);
		transition: transform var(--transition-settings), background var(--transition-settings),
			box-shadow var(--transition-settings);
	}

	.contributions__link:hover {
		transform: scale(1.1);
		background: var(--primary);
		box-shadow: 0 4px 16px -2px var(--accent200);
	}

	.contributions__subtitle {
		font-size: 0.8rem;
		color: var(--accent200);
	}

	.contributions__list {
		display: grid;
		grid-template-columns: repeat(53, var(--size));
		gap: var(--gap);
		align-items: flex-start;
	}

	.contributions__list_scroll {
		overflow-x: auto;
	}

	.contributions__week {
		display: grid;
		grid-template-rows: repeat(7, var(--size));
		gap: var(--gap);
	}

	.contributions__day {
		aspect-ratio: 1/1;
		border-radius: 2px;
		background: rgba(240, 240, 240, 0.9);
	}

	:global(.dark-mode .contributions__day) {
		background: rgba(240, 240, 240, 0.1);
	}

	.contributions__footer {
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
	}

	.contributions__colors {
		display: grid;
		grid-template-columns: min-content repeat(5, var(--size)) min-content;
		gap: var(--gap);
	}

	.contributions__caption {
		font-size: 0.7rem;
		line-height: 1;
		color: var(--secondary100);
	}
</style>

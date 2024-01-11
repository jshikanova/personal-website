<script lang="ts">
	import clsx from 'clsx';
	import { LinkIcon, MailIcon, TwitterIcon } from 'svelte-feather-icons';

	import { Container, Clock, GithubContributions } from '$lib/components';

	export let data;

	const { user: githubData } = data;
</script>

<Container>
	<div class="grid grid-cols-12 gap-fluid-4">
		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800',
				'col-span-full'
			)}
		>
			<div class="flex flex-col gap-fluid-5">
				<div class="flex flex-wrap items-center gap-fluid-5">
					<img
						class="size-[theme(spacing.fluid-12)] rounded-fluid-4"
						src="/images/Julia Shikanova.jpeg"
						alt="Julia Shikanova"
						width="88"
						height="88"
					/>
					<div>
						<h1 class="mb-2 text-xl text-orange-100">Julia Shikanova</h1>
						<h2 class="text-md font-normal text-black-100 dark:text-linen-200">
							Frontend developer
						</h2>
					</div>
				</div>
			</div>
		</div>

		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800',
				'col-span-4',
				'flex items-center gap-4 font-semibold'
			)}
		>
			<span class="relative flex size-2">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-200 opacity-50"
				></span>
				<span class="relative inline-flex size-2 rounded-full bg-orange-100"></span>
			</span>

			<p>Available for hire</p>
		</div>

		<a
			href="/resume"
			class={clsx(
				'rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800',
				'col-span-2',
				'relative flex items-center justify-center font-semibold text-blue-800 dark:text-lightblue-100',
				'transition-transform duration-300 hover:scale-105'
			)}
		>
			Resume
			<LinkIcon class="absolute right-3 top-3 size-3" />
		</a>

		<div
			class={clsx('rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800', 'col-span-4')}
		>
			<Clock />
		</div>

		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800',
				'col-span-6',
				'flex items-center gap-4'
			)}
		>
			<span
				class="relative text-xl leading-[0]"
				aria-label="Smiling Face with Open Hands"
				title="Flag of Kazakhstan">🇰🇿</span
			>
			<p>
				Based in Kazakhstan,
				<span class="text-black-800 text-opacity-60 dark:text-linen-100 dark:text-opacity-60">
					Pavlodar
				</span>
			</p>
		</div>

		<div
			class={clsx('rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800', 'col-span-3')}
		>
			<Clock timeZone={myTimeZone} />
		</div>

		<div
			class={clsx('rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800', 'col-span-3')}
		>
			{#if localTimeZone !== myTimeZone}
				<Clock timeZone={localTimeZone} />
			{:else}
				<p class="text-center">
					Hey, neighbor! We are sharing a timeZone
					<span aria-label="Smiling Face with Open Hands" title="Smiling Face with Open Hands">
						🤗
					</span>
				</p>
			{/if}
		</div>

		<div
			class={clsx('rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800', 'col-span-6')}
		>
			Weather
		</div>

		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800',
				'col-span-8 row-span-2'
			)}
		>
			<p class="mb-3">Welcome to my little corner of the Internet!</p>
			<p>Join me on my journey to becoming a better developer and problem solver.</p>
		</div>

		<a
			href="mailto:juliashikanova@yandex.ru"
			target="_blank"
			rel="noopener noreferrer"
			class={clsx(
				'rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800',
				'col-span-4 col-start-9',
				'relative flex items-center justify-center font-semibold text-[#1DA1F2]',
				'transition-transform duration-300 hover:scale-105'
			)}
		>
			Twitter
			<TwitterIcon class="absolute right-3 top-3 size-3" />
		</a>

		<a
			href="mailto:juliashikanova@yandex.ru"
			target="_blank"
			rel="noopener noreferrer"
			class={clsx(
				'rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800',
				'col-span-4',
				'relative flex items-center justify-center font-semibold',
				'transition-transform duration-300 hover:scale-105'
			)}
		>
			Contact
			<MailIcon class="absolute right-3 top-3 size-3" />
		</a>

		{#if githubData}
			<div
				class={clsx(
					'rounded-fluid-5 border bg-white-200 p-fluid-6 dark:bg-black-800',
					'col-span-full'
				)}
			>
				<GithubContributions
					contributions={githubData?.contributionsCollection.contributionCalendar}
				/>
			</div>
		{/if}
	</div>
</Container>

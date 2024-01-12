<script lang="ts">
	import clsx from 'clsx';
	import { CodepenIcon, LinkIcon, MailIcon, TwitterIcon } from 'svelte-feather-icons';

	import { Container, Clock, GithubContributions } from '$lib/components';

	export let data;

	const { user: githubData } = data;
</script>

<Container>
	<div
		class={clsx(
			'grid gap-fluid-4',
			'grid-cols-[repeat(12,_minmax(16px,_1fr))] lg:grid-cols-[repeat(12,_minmax(69px,_1fr))]'
		)}
	>
		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-full lg:col-span-8'
			)}
		>
			<div class="flex flex-col">
				<div class="flex flex-col flex-wrap items-center gap-fluid-5 sm:flex-row">
					<img
						class="size-fluid-14 rounded-fluid-4 lg:hidden"
						src="/images/Julia Shikanova.jpeg"
						alt="Julia Shikanova"
						width="88"
						height="88"
					/>
					<div>
						<h1 class="mb-2 text-center text-xl text-orange-100 sm:text-left sm:text-xxl">
							Julia Shikanova
						</h1>
						<h2
							class="text-center text-lg font-normal text-black-100 dark:text-linen-200 sm:text-left"
						>
							Frontend developer
						</h2>
					</div>
				</div>
			</div>
		</div>

		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'hidden lg:col-span-4 lg:row-span-2 lg:block',
				'overflow-hidden'
			)}
		>
			<img
				class={clsx(
					'aspect-square rounded-fluid-3 object-cover object-bottom',
					'transform-[object-view-box] duration-300 ease-in-out',
					'[object-view-box:inset(0%_18%_18%_18%)] hover:[object-view-box:inset(0%_0%_0%_0%)]'
				)}
				src="/images/Julia Shikanova (2).jpeg"
				alt="Julia Shikanova"
				width="333"
				height="333"
			/>
			<p></p>
		</div>

		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-full lg:col-span-8'
			)}
		>
			<div class="max-w-[calc(theme(fontSize.md)*28)]">
				<p class="mb-3">
					Welcome to my little corner of the Internet!
					<span aria-label="Waving Hand" title="Waving Hand">👋</span>
				</p>

				<p>Join me on my journey to becoming a better developer and problem solver.</p>
			</div>
		</div>

		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-full sm:col-span-6 lg:col-span-4',
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
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-6 lg:col-span-2',
				'relative flex items-center justify-center font-semibold text-blue-800 dark:text-lightblue-100',
				'transition-transform duration-300 hover:scale-105'
			)}
		>
			Resume
			<LinkIcon class="absolute right-3 top-3 size-3" />
		</a>

		<a
			href="mailto:juliashikanova@yandex.ru"
			target="_blank"
			rel="noopener noreferrer"
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-6 sm:col-span-4 lg:col-span-2',
				'relative flex items-center justify-center font-semibold',
				'transition-transform duration-300 hover:scale-105'
			)}
		>
			Contact
			<MailIcon class="absolute right-3 top-3 size-4" />
		</a>

		<a
			href="https://x.com/jshikanova"
			target="_blank"
			rel="noopener noreferrer"
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-6 sm:col-span-4 lg:col-span-2',
				'relative flex items-center justify-center font-semibold text-[#1DA1F2]',
				'transition-transform duration-300 hover:scale-105'
			)}
		>
			Twitter
			<TwitterIcon class="absolute right-3 top-3 size-4" />
		</a>

		<a
			href="https://codepen.io/jshikanova"
			target="_blank"
			rel="noopener noreferrer"
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-6 sm:col-span-4 lg:col-span-2',
				'relative flex items-center justify-center font-semibold',
				'transition-transform duration-300 hover:scale-105'
			)}
		>
			Codepen
			<CodepenIcon class="absolute right-3 top-3 size-4" />
		</a>

		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-full sm:col-span-7',
				'flex items-center gap-12'
			)}
		>
			<div class="flex items-center gap-4">
				<span
					class="relative text-xl leading-[0]"
					aria-label="Smiling Face with Open Hands"
					title="Flag of Kazakhstan"
				>
					🇰🇿
				</span>
				<p class="leading-none">
					Based in Kazakhstan,
					<span class="text-black-800 text-opacity-60 dark:text-linen-100 dark:text-opacity-60">
						Pavlodar
					</span>
				</p>
			</div>
		</div>

		<div
			class={clsx(
				'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
				'col-span-full sm:col-span-5'
			)}
		>
			<Clock />
		</div>

		{#if githubData}
			<div
				class={clsx(
					'rounded-fluid-5 border bg-white-100 p-fluid-5 dark:bg-black-800 lg:p-fluid-6',
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

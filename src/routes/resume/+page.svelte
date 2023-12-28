<script lang="ts">
	import { ExternalLinkIcon } from 'svelte-feather-icons';

	import { Container, Link } from '$lib/components';

	import { contacts, education, experience, projects, publications, skills } from './content';
</script>

<div class="resume">
	<Container class="gap-y-fluid-8">
		<h1>Resume</h1>
		<section>
			<div class="grid justify-items-center gap-y-fluid-7">
				<img
					class="size-fluid-15 rounded-full"
					src="/images/Julia Shikanova.jpeg"
					alt="Julia Shikanova"
					width="120"
					height="120"
				/>
				<div class="text-center">
					<p class="text-xl font-bold leading-[0.9]">Julia Shikanova</p>
					<p class="text-lg text-orange-100">Frontend developer</p>
				</div>
			</div>
		</section>
		<hr />
		<section>
			<h2>Summary</h2>
			<p>
				Developer with 3 years of experience in React and Typescript. Eager and motivated to learn
				and improve. Aimed to write clean code, create accessible user interfaces with best
				performance possible.
			</p>
		</section>
		<hr />
		<section>
			<h2>Experience</h2>
			<ul>
				{#each experience as { jobTitle, date, at }}
					<li>
						<div class="flex flex-col justify-between gap-x-fluid-5 md:flex-row">
							<div>
								<h3 class="mb-fluid-3">{jobTitle}</h3>
								<p>{at}</p>
							</div>
							<p class="text-sm text-black-100 dark:text-linen-200">{date}</p>
						</div>
					</li>
				{/each}
			</ul>
		</section>
		<hr />
		<section>
			<h2>Projects</h2>
			<ul>
				{#each projects as { title, url, stack }}
					<li>
						<h3 class="mb-fluid-3">
							<Link class="inline" href={url} isOuter={true}>
								{title}
								<ExternalLinkIcon
									class="mb-fluid-4 inline h-fluid-6 w-fluid-6 px-fluid-1"
									size="12"
								/>
							</Link>
						</h3>
						<p><b>Stack:</b> {stack}</p>
					</li>{/each}
			</ul>
		</section>
		<hr />
		<section>
			<h2>Skills</h2>
			<ul>
				{#each Object.entries(skills) as [title, skillGroup]}
					<li>
						<h3 class="mb-fluid-3">{title}</h3>
						<p>
							{#each skillGroup as skill, index}
								{index !== skillGroup.length - 1 ? skill + ', ' : skill}
							{/each}
						</p>
					</li>
				{/each}
			</ul>
		</section>
		<hr />
		<section>
			<h2>Publications</h2>
			<ul>
				{#each publications as { title, url }}
					<li class="pb-fluid-4">
						<h3 class="mb-fluid-3">
							<Link class="inline gap-fluid-2" href={url} isOuter={true}>
								{title}
								<ExternalLinkIcon
									class="mb-fluid-4 inline h-fluid-6 w-fluid-6 px-fluid-1"
									size="12"
								/>
							</Link>
						</h3>
						<!-- <p>{publishedAt}</p> -->
					</li>
				{/each}
			</ul>
		</section>
		<hr />
		<section>
			<h2>Education</h2>
			<ul>
				{#each education as { educationalInstitution, date, degree }}
					<li>
						<div class="flex list-disc flex-col justify-between gap-x-fluid-5 gap-y-2 lg:flex-row">
							<div>
								<h3 class="mb-fluid-3">
									{degree}
								</h3>
								<p>{educationalInstitution}</p>
							</div>
							<p class="text-sm text-black-100 dark:text-linen-200">{date}</p>
						</div>
					</li>
				{/each}
			</ul>
		</section>
		<hr />
		<section>
			<h2>Contact</h2>
			<ul class="flex !list-none flex-wrap gap-x-fluid-6 gap-y-fluid-2 pl-0">
				{#each contacts as { title, url, Icon }}
					<li class="pb-0">
						<Link class="flex items-center gap-fluid-3" href={url} isOuter={true}>
							<Icon class="h-fluid-5 w-fluid-5" />
							{title}
						</Link>
					</li>
				{/each}
			</ul>
		</section>
		<hr />
	</Container>
</div>

<style lang="postcss">
	section {
		display: grid;
		row-gap: theme('spacing.fluid-7');
	}

	ul {
		list-style-type: disc;
	}
</style>

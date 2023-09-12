<script lang="ts">
	import { ExternalLinkIcon } from 'svelte-feather-icons';
	import { contacts, education, experience, projects, publications, skills } from './content';
</script>

<div class="resume">
	<div class="container">
		<h1>Resume</h1>
		<section class="resume__section">
			<div class="resume__header">
				<img
					class="resume__image"
					src="/images/Julia Shikanova.jpeg"
					alt="Julia Shikanova"
					width="120"
					height="120"
				/>
				<div class="resume__header-text">
					<p class="resume__name">Julia Shikanova</p>
					<p class="resume__job-title">Frontend developer</p>
				</div>
			</div>
		</section>
		<hr />
		<section class="resume__section">
			<h2>Summary</h2>
			<p>
				Developer with 3 years of experience in React and Typescript. Eager and motivated to learn
				and improve. Aimed to write clean code, create accessible user interfaces with best
				performance possible.
			</p>
		</section>
		<hr />
		<section class="resume__section">
			<h2>Experience</h2>
			<ul>
				{#each experience as { jobTitle, date, at }}
					<li>
						<div class="resume__title-wrapper">
							<h3 class="resume__subtitle">{jobTitle}</h3>
							<p class="resume__date">{date}</p>
						</div>
						<p>{at}</p>
					</li>
				{/each}
			</ul>
		</section>
		<hr />
		<section class="resume__section">
			<h2>Projects</h2>
			<ul>
				{#each projects as { title, url, stack }}
					<li>
						<h3 class="resume__subtitle">
							<a class="link resume__link" href={url} target="_blank" rel="noopener noreferrer">
								{title}
								<ExternalLinkIcon size="12" />
							</a>
						</h3>
						<p><b>Stack:</b> {stack}</p>
					</li>{/each}
			</ul>
		</section>
		<hr />
		<section class="resume__section">
			<h2>Skills</h2>
			<ul>
				{#each Object.entries(skills) as [title, skillGroup]}
					<li>
						<h3 class="resume__subtitle">{title}</h3>
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
		<section class="resume__section">
			<h2>Publications</h2>
			<ul>
				{#each publications as { title, url }}
					<li class="publications__item">
						<h3 class="resume__subtitle">
							<a class="link resume__link" href={url}>
								{title}
								<ExternalLinkIcon size="12" />
							</a>
						</h3>
						<!-- <p>{publishedAt}</p> -->
					</li>
				{/each}
			</ul>
		</section>
		<hr />
		<section class="resume__section">
			<h2>Education</h2>
			<ul>
				{#each education as { educationalInstitution, date, degree }}
					<li>
						<div class="resume__title-wrapper">
							<h3 class="resume__subtitle">{degree}</h3>
							<p class="resume__date">{date}</p>
						</div>
						<p>{educationalInstitution}</p>
					</li>
				{/each}
			</ul>
		</section>
		<hr />
		<section class="resume__section">
			<h2>Contact</h2>
			<ul class="resume__contact">
				{#each contacts as { title, url, Icon }}
					<li class="resume__contact-item">
						<a
							class="link resume__contact-link"
							href={url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon class="resume__contact-icon" />
							{title}
						</a>
					</li>
				{/each}
			</ul>
		</section>
		<hr />
	</div>
</div>

<style>
	.container {
		row-gap: var(--spacing-8);
	}
	.resume__header {
		display: grid;
		row-gap: var(--spacing-7);
		justify-items: center;
	}

	.resume__header-text {
		text-align: center;
	}

	.resume__image {
		--size: var(--spacing-15);

		width: var(--size);
		height: var(--size);
		border-radius: 50%;
	}

	.resume__name {
		font-size: var(--lg-font-size);
		font-weight: bold;
		line-height: 0.9;
	}

	.resume__job-title {
		font-size: var(--md-font-size);
		color: var(--accent100);
	}

	.resume__section {
		display: grid;
		row-gap: var(--spacing-7);
	}

	.resume__title-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		row-gap: var(--spacing-7);
	}

	/* .resume__date {
		font-size: 1rem;
	} */

	.resume__subtitle {
		margin-bottom: var(--spacing-3);
	}

	.publications__item {
		padding-bottom: var(--spacing-4);
	}

	.resume__link {
		gap: var(--spacing-2);
	}

	.resume__contact {
		display: flex;
		gap: var(--spacing-6);
		list-style: none;
		padding-left: 0;
	}

	.resume__contact-item {
		padding-bottom: 0;
	}

	.resume__contact-link {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
	}

	:global(.resume__contact-icon) {
		--size: var(--spacing-5);

		width: var(--size);
		height: var(--size);
	}
</style>

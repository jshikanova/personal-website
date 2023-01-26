<script lang="ts">
	import { contacts, education, experience, projects, publications, skills } from './content';
</script>

<div class="resume">
	<div class="grid-container">
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
							<a class="link" href={url}>
								{title}
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
				{#each publications as { title, url, publishedAt }}
					<li>
						<h3 class="resume__subtitle">
							<a class="link" href={url}>
								{title}
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
							<Icon size="16" />
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
	.resume__header {
		display: grid;
		gap: 32px;
		justify-items: center;
	}

	.resume__header-text {
		text-align: center;
	}

	.resume__image {
		border-radius: 50%;
	}

	.resume__name {
		font-family: var(--rounded-font);
		font-size: 2.2rem;
		font-weight: bold;
		line-height: 0.9;
	}

	.resume__job-title {
		font-size: 1.4rem;
		color: var(--accent100);
	}

	.resume__section {
		display: grid;
		gap: 32px;
	}

	.resume__title-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 32px;
	}

	.resume__date {
		font-size: 1rem;
	}

	.resume__subtitle {
		margin-bottom: 8px;
	}

	.resume__contact {
		display: flex;
		gap: 24px;
		list-style: none;
		padding-left: 0;
	}

	.resume__contact-item {
		padding-bottom: 0;
	}

	.resume__contact-link {
		display: flex;
		align-items: center;
		gap: 4px;
	}
</style>

<script lang="ts">
	import { LinkedinIcon, MailIcon, MessageSquareIcon } from 'svelte-feather-icons';

	const experience = [
		{ jobTitle: 'Frontend developer', date: 'August 2019 - June 2022', at: 'Shakuro' },
		{ jobTitle: 'Frontend developer trainee', date: 'June 2019 - July 2019', at: 'Shakuro' },
		{ jobTitle: 'HTML/Wordpress developer', date: 'March 2017 - March 2019', at: 'Freelance' }
	];

	const projects = [
		{
			title: 'Halo Product Design Website & Animation Concept landing',
			url: 'https://halo.shakuro.com/',
			stack: 'Typescript, GreenSock, ViteJS, TailwindCSS, SCSS'
		},
		{
			title: 'Identity and branding landing',
			url: 'https://branding.shakuro.com/',
			stack: 'Typescript, GreenSock, ViteJS, TailwindCSS, SCSS'
		},
		{
			title: 'Shakuro Blog',
			url: 'https://shakuro.com/blog',
			stack: 'NextJS, GraphQL, TailwindCSS, SCSS, Framer Motion'
		},
		{
			title: 'StreetArtNews',
			url: 'https://halo.shakuro.com/',
			stack: 'Typescript, ParcelJS, SCSS'
		},
		{
			title: 'Shakuro',
			url: 'https://shakuro.com/',
			stack: 'GatsbyJS, GraphQL, MDX, TailwindCSS, SCSS, Framer Motion'
		}
	];

	const skills = {
		Languages: ['Javascript + Typescript', 'HTML', 'CSS + SCSS + BEM'],
		'Frameworks/libraries': [
			'React',
			'GatsbyJS',
			'NextJS',
			'Styled Components',
			'TailwindCSS',
			'Framer Motion',
			'GreenSock'
		],
		Tools: [
			'Visual Studio Code',
			'Git + Gitlab / Github',
			'MailChimp / SendGrid',
			'Figma',
			'Netlify / Vercel'
		]
	};

	const publications = [
		{
			title: 'GreenSock Tutorial for Beginners: Web Animation Library',
			url: 'https://shakuro.com/blog/greensock-tutorial-for-beginners-web-animation-library',
			publishedAt: 'Shakuro Blog'
		},
		{
			title: 'React Spring Tutorial: Making Animated React Apps',
			url: 'https://shakuro.com/blog/react-spring-tutorial-making-animated-react-apps',
			publishedAt: 'Shakuro Blog'
		},
		{
			title: 'Framer Motion Tutorials: Make More Advanced Animations',
			url: 'https://shakuro.com/blog/framer-motion-tutorials-make-more-advanced-animations',
			publishedAt: 'Shakuro Blog'
		}
	];

	const education = [
		{
			educationalInstitution: 'Crimean Federal University',
			date: '2016 - 2018',
			degree: 'Masters Degree with Honours in Business Informatics'
		},
		{
			educationalInstitution: 'Crimean Federal University',
			date: '2012 - 2016',
			degree: 'Bachelor Degree in Business Informatics'
		}
	];

	const contacts = [
		{
			title: 'Email',
			url: 'mailto:juliashikanova@yandex.ru',
			Icon: MailIcon
		},
		{
			title: 'LinkedIn',
			url: 'https://www.linkedin.com/in/julia-shikanova-a22914201/',
			Icon: LinkedinIcon
		},
		{
			title: 'Telegram',
			url: 'https://t.me/jsikanova',
			Icon: MessageSquareIcon
		}
	];
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
			<p>Frontend developer with 3.5 years of experience.</p>
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
						<p>Stack: {stack}</p>
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

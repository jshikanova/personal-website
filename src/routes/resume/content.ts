import { LinkedinIcon, MailIcon, MessageSquareIcon } from 'svelte-feather-icons';

export const experience = [
	{ jobTitle: 'Frontend developer', date: 'August 2019 - June 2022', at: 'Shakuro' },
	{ jobTitle: 'Frontend developer trainee', date: 'June 2019 - July 2019', at: 'Shakuro' },
	{ jobTitle: 'HTML/Wordpress developer', date: 'March 2017 - March 2019', at: 'Freelance' }
];

export const projects = [
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

export const skills = {
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

export const publications = [
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

export const education = [
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

export const contacts = [
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

<script>
	import {
		// TwitterIcon,
		GithubIcon,
		CodepenIcon
		// LinkedinIcon
		// CodesandboxIcon
	} from 'svelte-feather-icons';

	const socialLinks = [
		// {
		// 	name: 'Twitter',
		// 	Icon: TwitterIcon,
		// 	link: 'https://twitter.com/jshikanova'
		// },
		{
			name: 'Github',
			Icon: GithubIcon,
			link: 'https://github.com/jshikanova'
		},
		{
			name: 'Codepen',
			Icon: CodepenIcon,
			link: 'https://codepen.io/jshikanova'
		}
		// {
		// 	name: 'Codesandbox',
		// 	Icon: CodesandboxIcon,
		// 	link: 'https://codesandbox.io/u/jshikanova'
		// },
		// {
		// 	name: 'LinkedIn',
		// 	Icon: LinkedinIcon,
		// 	link: 'https://www.linkedin.com/in/julia-shikanova-a22914201/'
		// }
	];
</script>

<ul class="socials">
	{#each socialLinks as { name, Icon, link }}
		<li class="socials__item">
			<a class="socials__link" href={link} target="_blank" rel="noopener noreferrer" title={name}>
				<div class="socials__icon">
					<Icon size="16" />
				</div>
				{name}
			</a>
		</li>
	{/each}
</ul>

<style>
	.socials {
		list-style-type: none;
		padding-left: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 32px;
	}

	.socials__item {
		padding-bottom: 0;
	}

	.socials__link {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--secondary200);
	}

	.socials__icon {
		flex-shrink: 0;
		background: var(--accent200);
		color: var(--primary);
		padding: 4px;
		border-radius: 4px;
		transition: transform var(--transition-settings), background var(--transition-settings),
			box-shadow var(--transition-settings);
	}

	.socials__link:hover .socials__icon {
		transform: scale(1.1);
		background: var(--accent200-hover);
		box-shadow: 0 4px 16px -2px var(--accent200);
	}
</style>

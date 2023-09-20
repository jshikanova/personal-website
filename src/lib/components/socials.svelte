<script lang="ts">
	import { GithubIcon, CodepenIcon, MailIcon, ZapIcon, XIcon } from 'svelte-feather-icons';

	const socialLinks = [
		{
			name: 'Github',
			Icon: GithubIcon,
			link: 'https://github.com/jshikanova'
		},
		{
			name: 'Codepen',
			Icon: CodepenIcon,
			link: 'https://codepen.io/jshikanova'
		},
		{
			name: 'StackBlitz',
			Icon: ZapIcon,
			link: 'https://stackblitz.com/@jshikanova'
		},
		{
			name: 'X / Twitter',
			Icon: XIcon,
			link: 'https://x.com/jshikanova'
		},
		{
			name: 'Email',
			Icon: MailIcon,
			link: 'mailto:juliashikanova@yandex.ru'
		}
	];
</script>

<ul class="socials">
	{#each socialLinks as { name, Icon, link }}
		<li class="socials__item">
			<a class="socials__link" href={link} target="_blank" rel="noopener noreferrer" title={name}>
				<div class="socials__icon-wrapper">
					<Icon class="socials__icon" />
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
		gap: var(--spacing-5);
	}

	.socials__item {
		padding-bottom: 0;
	}

	.socials__link {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		font-weight: 500;
		color: var(--secondary200);
	}

	.socials__icon-wrapper {
		flex-shrink: 0;
		background: var(--accent200);
		color: var(--primary);
		padding: 4px;
		border-radius: var(--spacing-1);
		transition: 0.3s ease-in-out;
	}

	:global(.socials__icon) {
		--size: var(--spacing-5);

		width: var(--size);
		height: var(--size);
	}

	.socials__link:hover :global(.socials__icon-wrapper) {
		transform: scale(1.05);
		background: var(--accent200-hover);
		box-shadow: var(--glow100) var(--accent200);
	}
</style>

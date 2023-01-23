<script>
	import {
		TwitterIcon,
		GithubIcon,
		MailIcon,
		CodepenIcon,
		FileTextIcon
	} from 'svelte-feather-icons';

	const socials = [
		{
			name: 'email',
			url: 'mailto:juliashikanova@yandex.ru',
			Icon: MailIcon
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/jshikanova',
			Icon: TwitterIcon
		},
		{
			name: 'Github',
			url: 'https://github.com/jshikanova',
			Icon: GithubIcon
		},
		{
			name: 'Codepen',
			url: 'https://codepen.io/jshikanova',
			Icon: CodepenIcon
		},
		{
			name: 'Blog - The Meta Imposter',
			url: 'https://metaimposter.hashnode.dev/',
			Icon: FileTextIcon
		}
	];
</script>

<div class="socials">
	{#each socials as { name, url, Icon }}
		<a class="socials__link" href={url} title={name} target="_blank" rel="noopener noreferrer"
			><Icon size="24" />
		</a>
	{/each}
</div>

<style>
	.socials {
		display: flex;
		gap: 16px;
	}

	.socials__link {
		transition: color ease-in-out 0.3s;
	}

	.socials__link {
		color: var(--secondary200);
	}

	.socials__link:hover {
		color: var(--accent100);
	}
</style>

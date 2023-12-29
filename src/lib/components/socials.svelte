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

<ul class="flex flex-wrap gap-fluid-5 ps-0">
	{#each socialLinks as { name, Icon, link }}
		<li class="pb-0">
			<a
				class="group flex items-center gap-fluid-3 font-medium text-black-800 dark:text-linen-100"
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				title={name}
			>
				<div
					class="shrink-0 rounded-[theme(spacing.fluid-1)] bg-blue-800 p-1 text-white-100 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:bg-blue-900 dark:bg-lightblue-200 dark:text-black-900 group-hover:dark:bg-lightblue-100"
				>
					<Icon class="size-[theme(spacing.fluid-5)]" />
				</div>
				{name}
			</a>
		</li>
	{/each}
</ul>

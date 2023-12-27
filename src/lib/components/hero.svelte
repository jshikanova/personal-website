<script>
	import { MailIcon } from 'svelte-feather-icons';
	import Container from './container.svelte';
	import Button from './button.svelte';
</script>

<div class="grid items-center">
	<Container>
		<div class="flex flex-col gap-fluid-6">
			<div class="flex flex-wrap items-center gap-fluid-7">
				<img
					class="h-[theme(spacing.fluid-13)] w-[theme(spacing.fluid-13)] rounded-full"
					src="/images/Julia Shikanova.jpeg"
					alt="Julia Shikanova"
					width="96"
					height="96"
				/>
				<div>
					<h1 class="mb-2 text-xl text-orange-100">Julia Shikanova</h1>
					<h2 class="text-lg font-normal text-black-100 dark:text-linen-200">Frontend developer</h2>
				</div>
			</div>
			<p class="max-w-[calc(theme(fontSize.md)*28)]">
				<span>Welcome to my little corner of the Internet!</span>
				<span>
					It's dedicated to my ongoing journey to become a better developer and problem solver.</span
				>
			</p>
			<Button
				tagName="a"
				href="mailto:juliashikanova@yandex.ru"
				target="_blank"
				rel="noopener noreferrer"
			>
				Contact
				<MailIcon class="h-[theme(spacing.fluid-5)] w-[theme(spacing.fluid-5)]" />
			</Button>
		</div>
	</Container>
</div>

<script>
	import { MailIcon, TwitterIcon } from 'svelte-feather-icons';
</script>

<div class="hero">
	<div class="grid-container">
		<div class="hero__wrapper">
			<h1 class="hero__title">Julia Shikanova</h1>
			<h2 class="hero__subtitle">Frontend developer</h2>
			<div class="hero__links">
				<a class="button" href="mailto:juliashikanova@yandex.ru">
					Get in touch
					<MailIcon size="16" strokeWidth={3} />
				</a>
				<a
					class="button"
					href="https://twitter.com/jshikanova"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TwitterIcon size="16" strokeWidth={3} />
					@jshikanova
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.hero {
		height: max(75vh, 0px);
		display: grid;
		align-items: center;
	}

	.hero__wrapper {
		display: grid;
		gap: 8px;
	}

	.hero__title {
		color: var(--accent100);
	}

	.hero__subtitle {
		margin-bottom: 24px;
	}

	.hero__links {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
	}
</style>

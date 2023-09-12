<script>
	import { MailIcon } from 'svelte-feather-icons';
</script>

<div class="hero">
	<div class="container">
		<div class="hero__wrapper">
			<div class="hero__profile">
				<img
					class="hero__image"
					src="/images/Julia Shikanova.jpeg"
					alt="Julia Shikanova"
					width="96"
					height="96"
				/>
				<div>
					<h1 class="hero__title">Julia Shikanova</h1>
					<h2 class="hero__subtitle">Frontend developer</h2>
				</div>
			</div>
			<p class="hero__intro">
				<span>Welcome to my little corner of the Internet!</span>
				<span>
					It's dedicated to my ongoing journey to become a better developer and problem solver.</span
				>
			</p>
			<a
				class="button"
				href="mailto:juliashikanova@yandex.ru"
				target="_blank"
				rel="noopener noreferrer"
			>
				Contact
				<MailIcon class="mail-icon" />
			</a>
		</div>
	</div>
</div>

<style>
	.hero {
		display: grid;
		align-items: center;
	}

	.hero__wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}

	.hero__profile {
		display: flex;
		gap: var(--spacing-7);
		align-items: center;
	}

	.hero__image {
		--size: var(--spacing-13);
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
	}

	.hero__title {
		color: var(--accent100);
		font-size: var(--lg-font-size);
		margin-bottom: 8px;
	}

	.hero__subtitle {
		color: var(--secondary100);
		font-weight: 400;
		font-size: var(--md-font-size);
	}

	.hero__intro {
		max-width: calc(var(--sm-font-size) * 28);
	}

	:global(.mail-icon) {
		--size: var(--spacing-5);

		width: var(--size);
		height: var(--size);
	}
</style>

<script lang="ts">
	import Socials from './socials.svelte';
</script>

<div class="hero">
	<div class="grid-container">
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
				Welcome to my little corner of the Internet! It's dedicated to my ongoing journey to become
				a better developer and problem solver.
			</p>
			<Socials />
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
		gap: 40px;
	}

	.hero__profile {
		display: flex;
		gap: 32px;
		align-items: center;
	}

	.hero__image {
		border-radius: 50%;
	}

	.hero__title {
		color: var(--accent100);
		font-size: 2rem;
		margin-bottom: 8px;
	}

	.hero__subtitle {
		color: var(--secondary100);
		font-weight: 400;
		font-size: 1.4rem;
	}

	.hero__intro {
		max-width: 540px;
	}
</style>

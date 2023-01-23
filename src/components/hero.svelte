<script>
	import { MailIcon } from 'svelte-feather-icons';
</script>

<div class="hero">
	<div class="container">
		<div class="hero__wrapper">
			<p class="hero__greetings">
				Hello!
				<span class="hero__waving-hand" aria-label="waving hand">👋</span>
			</p>
			<h1 class="hero__title">
				My name is Julie
				<br />
				and I am frontend developer
			</h1>
			<a class="button" href="mailto:juliashikanova@yandex.ru">
				Get in touch
				<MailIcon size="16" />
			</a>
		</div>
	</div>
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 480px;
	}

	.hero__wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.hero__greetings {
		color: var(--accent100);
		font-size: 1.8rem;
		font-weight: 600;
	}

	.hero__waving-hand {
		display: inline-block;
		transform: scaleX(-1);
	}

	.hero__title {
		margin-bottom: 48px;
	}
</style>

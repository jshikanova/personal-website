<script lang="ts">
	import { demos } from './';
</script>

<div class="grid-container">
	<h2>Demos</h2>
	<ul class="demos">
		{#each demos as { title, url, source, tags, images }}
			<li class="demos__item">
				<div class="demos__images">
					<img class="demos__image" src={images[0]} alt={title} />
					<img class="demos__image" src={images[1]} alt={title} />
				</div>
				<div class="demos__description">
					<a class="link" href={url} target="_blank" rel="noopener noreferrer">
						<h3>
							{title}
						</h3>
					</a>
					<p>{source}</p>
					<div>
						{#each tags as tag}
							<span>{tag}</span>
						{/each}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.demos {
		display: grid;
		gap: 16px;
		padding: 0;
		list-style-type: none;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	}

	.demos__item {
		border: 1px solid var(--border);
		border-radius: 32px;
		overflow: hidden;
		transition: box-shadow var(--transition-settings);
	}

	.demos__images {
		position: relative;
		aspect-ratio: 3 / 2;
		background: var(--secondary100);
	}

	.demos__item:hover {
		box-shadow: var(--glow100) var(--accent200);
	}

	.demos__item:hover .demos__image:first-child {
		clip-path: circle(0 at 50% 50%);
	}

	.demos__image:first-child {
		position: absolute;
		clip-path: circle(100% at 50% 50%);
		transition: clip-path ease-in-out 0.5s;
	}

	.demos__description {
		padding: 16px;
	}
</style>

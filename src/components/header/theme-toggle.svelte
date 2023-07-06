<script lang="ts">
	import { fly } from 'svelte/transition';

	import { SunIcon, MoonIcon } from 'svelte-feather-icons';

	import { browser } from '$app/environment';

	const darkModeClass = 'dark-mode';
	let checked: boolean = browser ? localStorage.getItem('theme') === 'dark' : false;

	$: {
		if (browser) {
			const root = document.documentElement;

			if (checked) {
				localStorage.setItem('theme', 'dark');
				root.classList.add(darkModeClass);
				root.style.colorScheme = 'dark';
			} else {
				localStorage.setItem('theme', 'light');
				root.classList.remove(darkModeClass);
				root.style.colorScheme = 'light';
			}
		}
	}
</script>

<input id="theme-toggle" type="checkbox" aria-label="Toggle theme" bind:checked hidden />
<button class="icon-button" aria-label="Toggle theme" on:click={() => (checked = !checked)}>
	<!-- TODO: Fix flickering on FOUC -->
	{#if checked}
		<div class="icon icon__sun" transition:fly={{ duration: 1500, y: 24 }}>
			<SunIcon />
		</div>
	{:else}
		<div class="icon icon__moon" transition:fly={{ duration: 1500, y: -24 }}>
			<MoonIcon />
		</div>
	{/if}
</button>

<style>
	.icon-button {
		position: relative;
		height: 24px;
		width: 24px;
	}
	.icon {
		position: absolute;
		top: 0;
	}
</style>

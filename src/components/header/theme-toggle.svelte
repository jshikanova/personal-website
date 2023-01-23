<script lang="ts">
	import { SunIcon, MoonIcon } from 'svelte-feather-icons';

	import { browser } from '$app/environment';

	const darkModeClass = 'dark-mode';
	let checked = false;

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

<div>
	<input id="theme-toggle" type="checkbox" aria-label="Toggle theme" bind:checked hidden />
	<button class="icon-button" aria-label="Toggle theme" on:click={() => (checked = !checked)}>
		{#if checked}
			<MoonIcon />
		{:else}
			<SunIcon />
		{/if}
	</button>
</div>

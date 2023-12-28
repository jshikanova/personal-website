<script lang="ts">
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	type $$Props = App.AnchorButton | App.Button | App.Input;

	export let tagName: $$Props['tagName'] = 'button';

	onMount(() => {
		if (tagName === 'input' && $$slots.default) {
			throw new Error(
				'This component does not accept children if prop tagName is equals to "input"'
			);
		}
	});
</script>

<!-- TODO: Find a way to reuse class with autocomplete for tailwind, probably won't happen -->
{#if tagName !== 'input'}
	<svelte:element
		this={tagName}
		class={clsx(
			'inline-flex shrink-0 items-center justify-center self-start',
			'gap-fluid-3 bg-blue-800 dark:bg-lightblue-200',
			'hover:scale-105 hover:bg-blue-900 dark:hover:bg-lightblue-100',
			'transition-all duration-200 ease-in-out',
			'font-semibold text-white-100 dark:text-black-900',
			'rounded-[theme(spacing.fluid-3)] px-fluid-5 py-fluid-3'
		)}
		{...$$restProps}
	>
		<slot />
	</svelte:element>
{:else}
	<svelte:element
		this={tagName}
		class={clsx(
			'inline-flex shrink-0 items-center justify-center self-start',
			'gap-fluid-3 bg-blue-800 dark:bg-lightblue-200',
			'hover:scale-105 hover:bg-blue-900 dark:hover:bg-lightblue-100',
			'transition-all duration-200 ease-in-out',
			'font-semibold text-white-100 dark:text-black-900',
			'rounded-[theme(spacing.fluid-3)] px-fluid-5 py-fluid-3'
		)}
		{...$$restProps}
	/>
{/if}

<script lang="ts">
	import clsx from 'clsx';

	let className: string = '';

	export { className as class };
</script>

<div
	class={clsx(
		'grid text-md',
		'*:col-start-2 *:[container:content/inline-size]',
		'[--column-gap:theme(spacing.fluid-6)] [--content:min(calc(100%-var(--column-gap)*2),72ch)]',
		'grid-cols-[1fr_var(--content)_1fr] gap-x-[--column-gap]',
		className
	)}
>
	<slot />
</div>

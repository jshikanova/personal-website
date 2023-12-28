<script lang="ts">
	import clsx from 'clsx';

	type $$Props = App.Anchor & {
		isOuter?: boolean;
		class?: string;
		variant?: 'base' | 'accent';
	};

	export let href: string;
	export let isOuter: boolean = false;
	export let variant: $$Props['variant'] = 'base';
	let className: string = '';
	export { className as class };
</script>

<a
	{href}
	class={clsx(
		variant === 'base'
			? 'text-blue-800 hover:text-blue-900 dark:text-lightblue-200 dark:hover:text-lightblue-100'
			: 'text-orange-100 hover:text-orange-200 dark:text-orange-200 dark:hover:text-orange-100',
		'relative inline-flex items-center leading-tight',
		'transition-colors duration-300 ease-in-out',
		'link',
		className
	)}
	{...isOuter && { target: '_blank', rel: 'noopener noreferrer' }}
	{...$$restProps}
>
	<slot />
</a>

<!--
  * Hover underline animation by 30 seconds of code
  * source: https://www.30secondsofcode.org/css/s/hover-underline-animation 
-->
<style lang="postcss">
	.link::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: -2px;
		left: 0;
		background-color: currentColor;
		transform-origin: bottom right;
		transition: transform ease-out 0.2s;
	}

	.link:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>

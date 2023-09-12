<script lang="ts">
	import { browser } from '$app/environment';
	import {
		addCssVariable,
		createFluidCSSUnit,
		fonts,
		getPixelsPerRem,
		spacing
	} from '$lib/helpers';

	if (browser) {
		const root = document.documentElement;
		const pixelsPerRem = getPixelsPerRem(root);

		// * Recalculate fluid fonts CSS variables if pixelsPerRem is not default value
		// * CSS variables is already hardcoded in ./src/app.css
		if (pixelsPerRem !== 16) {
			fonts.map(({ key, ...font }) => {
				const fluidFont = createFluidCSSUnit({ pixelsPerRem, ...font });

				addCssVariable(root, key, fluidFont);
			});

			spacing.map(({ key, ...font }) => {
				const fluidUnit = createFluidCSSUnit({ pixelsPerRem, ...font });

				addCssVariable(
					root,
					key,
					`${fluidUnit} /* ${font.unit.min * pixelsPerRem}px - ${font.unit.max * pixelsPerRem}px */`
				);
			});
		}
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import { addCssVariable, createFluidFontSize, fonts, getPixelsPerRem } from '$lib/helpers';

	if (browser) {
		const root = document.documentElement;
		const pixelsPerRem = getPixelsPerRem(root);

		// * Recalculate fluid fonts CSS variables if pixelsPerRem is not default value
		// * CSS variables is already hardcoded in ./src/app.css
		if (pixelsPerRem !== 16)
			fonts.map(({ key, ...font }) => {
				const fluidFont = createFluidFontSize({ pixelsPerRem, ...font });

				addCssVariable(root, key, fluidFont);
			});
	}
</script>

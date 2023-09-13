<script lang="ts">
	import { browser } from '$app/environment';
	import {
		addCssVariable,
		createFluidCSSUnit,
		fonts,
		// getHardcodedCSSVariables,
		getPixelsPerRem,
		spacing
	} from '$lib/helpers';

	if (browser) {
		const root = document.documentElement;
		const pixelsPerRem = getPixelsPerRem(root);

		// * CSS variables is already hardcoded in ./src/app.css
		if (pixelsPerRem !== 16) {
			Object.entries({ ...fonts, ...spacing }).forEach(([key, unit]) => {
				const fluidUnit = createFluidCSSUnit({ pixelsPerRem, ...unit });

				addCssVariable(root, key, fluidUnit);
			});
		}

		// getHardcodedCSSVariables({ units: { ...fonts, ...spacing }, pixelsPerRem });
	}
</script>

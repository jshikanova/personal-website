export const getPixelsPerRem = (root: HTMLElement) =>
	Number(getComputedStyle(root).fontSize.slice(0, -2));

export const addCssVariable = (root: HTMLElement, key: string, value: string) => {
	root.style.setProperty(`--${key}`, value);
};

const breakpoints = {
	xs: 640,
	sm: 768,
	md: 1024,
	lg: 1280,
	xl: 1440,
	xxl: 1920,
	xxxl: 2560
};

type Breakpoint = keyof typeof breakpoints;
type Unit = { min: number; max: number };
type Screen = { min: Breakpoint; max: Breakpoint };

type CreateFluidCSSUnit = {
	pixelsPerRem?: number;
	unit: Unit;
	screen: Screen;
};

type FluidCSSUnits = Record<string, CreateFluidCSSUnit>;

const screen: Screen = { min: 'xs', max: 'xxxl' };

// * Update hardcoded CSS variables if fonts is changed
export const fonts: FluidCSSUnits = {
	'xxl-font-size': { unit: { min: 4, max: 6 }, screen },
	'xl-font-size': { unit: { min: 2, max: 3 }, screen },
	'lg-font-size': { unit: { min: 1.5, max: 2 }, screen },
	'md-font-size': { unit: { min: 1.375, max: 1.75 }, screen },
	'sm-font-size': { unit: { min: 1, max: 1.5 }, screen },
	'xs-font-size': { unit: { min: 0.75, max: 1 }, screen }
};

type CreateSpacing = {
	keyPrefix: string;
	step?: number;
	length: number;
	startIndex?: number;
	startValue?: number;
	screen: Screen;
};

const createSpacing = ({
	keyPrefix,
	step = 0.25,
	length,
	startIndex = 1,
	startValue = 0,
	screen
}: CreateSpacing): FluidCSSUnits => {
	const units: FluidCSSUnits = {};

	for (let i = 0; i < length; i++) {
		const key = `${keyPrefix}-${startIndex + i}`;

		units[key] = {
			unit: {
				min: startValue + step * i,
				max: startValue + step * i + step
			},
			screen
		};
	}

	return units;
};

// * Update hardcoded CSS variables if spacing is changed
export const spacing = {
	...createSpacing({
		keyPrefix: 'spacing',
		step: 0.125,
		screen,
		startIndex: 1,
		startValue: 0.125,
		length: 1
	}),
	...createSpacing({
		keyPrefix: 'spacing',
		step: 0.25,
		screen,
		startIndex: 2,
		startValue: 0.25,
		length: 3
	}),
	...createSpacing({
		keyPrefix: 'spacing',
		step: 0.5,
		screen,
		startIndex: 5,
		startValue: 1,
		length: 6
	}),
	...createSpacing({
		keyPrefix: 'spacing',
		step: 1,
		screen,
		startIndex: 11,
		startValue: 4,
		length: 6
	})
	// ...createSpacing({
	// 	keyPrefix: 'spacing',
	// 	step: 2.5,
	// 	screen,
	// 	startIndex: 17,
	// 	startValue: 10,
	// 	length: 1
	// })
};

/**
 * Credit to Pedro Rodriguez [@pprg1996](https://github.com/pprg1996)
 * @see https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
 */
export const createFluidCSSUnit = ({
	pixelsPerRem = 16,
	unit,
	screen: defaultScreen
}: CreateFluidCSSUnit) => {
	const screen = {
		min: breakpoints[defaultScreen.min] / pixelsPerRem,
		max: breakpoints[defaultScreen.max] / pixelsPerRem
	};

	const slope = (unit.max - unit.min) / (screen.max - screen.min);
	const yAxisIntersection = -screen.min * slope + unit.min;

	return `clamp(${unit.min}rem, ${yAxisIntersection}rem + ${slope} * 100vw, ${unit.max}rem)`;
};

export const getHardcodedCSSVariables = ({
	units,
	pixelsPerRem
}: {
	units: FluidCSSUnits;
	pixelsPerRem: number;
}) => {
	const fluidUnits = Object.entries(units)
		.reduce<string[]>((acc, [key, value]) => {
			const fluidUnit = createFluidCSSUnit({ pixelsPerRem, ...value });
			const comment = `/* ${value.unit.min * pixelsPerRem}px - ${
				value.unit.max * pixelsPerRem
			}px */`;

			return [...acc, `--${key}: ${comment} ${fluidUnit}`];
		}, [])
		.join('\n');

	console.log(fluidUnits);
};

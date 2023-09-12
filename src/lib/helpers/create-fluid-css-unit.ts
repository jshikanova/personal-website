export const getPixelsPerRem = (root: HTMLElement) =>
	Number(getComputedStyle(root).fontSize.slice(0, -2));

export const addCssVariable = (root: HTMLElement, key: string, value: string) => {
	console.log(`--${key}:`, value);
	root.style.setProperty(`--${key}`, value);
};

const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	xxl: 1536
};

type Breakpoint = keyof typeof breakpoints;
type Unit = { min: number; max: number };
type Screen = { min: Breakpoint; max: Breakpoint };

type CreateFluidCSSUnit = {
	pixelsPerRem?: number;
	unit: Unit;
	screen: Screen;
};

type UnitWithKey = CreateFluidCSSUnit & { key: string };

const screen: Screen = { min: 'lg', max: 'xxl' };

// * Update hardcoded CSS variables if fonts is changed
export const fonts: UnitWithKey[] = [
	{ key: 'xl-font-size', unit: { min: 3, max: 6 }, screen },
	{ key: 'lg-font-size', unit: { min: 2, max: 4 }, screen },
	{ key: 'md-font-size', unit: { min: 1.25, max: 2.5 }, screen },
	{ key: 'sm-font-size', unit: { min: 1, max: 2 }, screen },
	{ key: 'xs-font-size', unit: { min: 0.8, max: 1.6 }, screen }
];

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
}: CreateSpacing) =>
	Array.from({ length }).map((n, i) => ({
		key: `${keyPrefix}-${startIndex + i}`,
		unit: {
			min: startValue + step * i,
			max: startValue + step * i + step
		},
		screen
	}));

// * Update hardcoded CSS variables if spacing is changed
export const spacing = [
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
];

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

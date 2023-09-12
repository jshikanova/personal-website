export const getPixelsPerRem = (root: HTMLElement) =>
	Number(getComputedStyle(root).fontSize.slice(0, -2));

export const addCssVariable = (root: HTMLElement, key: string, value: string) => {
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
type Font = { min: number; max: number };

type CreateFluidFontSize = {
	pixelsPerRem?: number;
	font: Font;
	screen: { min: Breakpoint; max: Breakpoint };
};

// * Update hardcoded CSS variables if fonts is changed
export const fonts: (CreateFluidFontSize & { key: string })[] = [
	{ key: 'xl-font-size', font: { min: 3, max: 6 }, screen: { min: 'lg', max: 'xxl' } },
	{ key: 'lg-font-size', font: { min: 2, max: 4 }, screen: { min: 'lg', max: 'xxl' } },
	{ key: 'md-font-size', font: { min: 1.25, max: 2.5 }, screen: { min: 'lg', max: 'xxl' } },
	{ key: 'sm-font-size', font: { min: 1, max: 2 }, screen: { min: 'lg', max: 'xxl' } },
	{ key: 'xs-font-size', font: { min: 0.8, max: 1.6 }, screen: { min: 'lg', max: 'xxl' } }
];

/**
 * Credit to Pedro Rodriguez [@pprg1996](https://github.com/pprg1996)
 * @see https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
 */
export const createFluidFontSize = ({
	pixelsPerRem = 16,
	font,
	screen: defaultScreen
}: CreateFluidFontSize) => {
	const screen = {
		min: breakpoints[defaultScreen.min] / pixelsPerRem,
		max: breakpoints[defaultScreen.max] / pixelsPerRem
	};

	const slope = (font.max - font.min) / (screen.max - screen.min);
	const yAxisIntersection = -screen.min * slope + font.min;

	return `clamp(${font.min}rem, ${yAxisIntersection}rem + ${slope} * 100vw, ${font.max}rem)`;
};

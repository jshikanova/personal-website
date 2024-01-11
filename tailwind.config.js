/** @type {import('tailwindcss').Config} */

const spacing = {
	'fluid-1': '/* 2px - 4px */ clamp(0.125rem, 0.08333333rem + 0.0010416666 * 100vw, 0.25rem)',
	'fluid-2': '/* 4px - 8px */ clamp(0.25rem, 0.1666rem + 0.00208333 * 100vw, 0.5rem)',
	'fluid-3': '/* 8px - 12px */ clamp(0.5rem, 0.41666666rem + 0.00208333 * 100vw, 0.75rem)',
	'fluid-4': '/* 12px - 16px */ clamp(0.75rem, 0.6666rem + 0.0020833333 * 100vw, 1rem)',
	'fluid-5': '/* 16px - 24px */ clamp(1rem, 0.83333333rem + 0.00416666 * 100vw, 1.5rem)',
	'fluid-6': '/* 24px - 32px */ clamp(1.5rem, 1.3333rem + 0.00416666 * 100vw, 2rem)',
	'fluid-7': '/* 32px - 40px */ clamp(2rem, 1.83333333rem + 0.00416666 * 100vw, 2.5rem)',
	'fluid-8': '/* 40px - 48px */ clamp(2.5rem, 2.3333rem + 0.00416666 * 100vw, 3rem)',
	'fluid-9': '/* 48px - 56px */ clamp(3rem, 2.833333rem + 0.00416666 * 100vw, 3.5rem)',
	'fluid-10': '/* 56px - 64px */ clamp(3.5rem, 3.3333rem + 0.00416666 * 100vw, 4rem)',
	'fluid-11': '/* 64px - 80px */ clamp(4rem, 3.6666rem + 0.00833333 * 100vw, 5rem)',
	'fluid-12': '/* 80px - 96px */ clamp(5rem, 4.6666rem + 0.00833333 * 100vw, 6rem)',
	'fluid-13': '/* 96px - 112px */ clamp(6rem, 5.6666rem + 0.008333333 * 100vw, 7rem)',
	'fluid-14': '/* 112px - 128px */ clamp(7rem, 6.6666rem + 0.00833333 * 100vw, 8rem)',
	'fluid-15': '/* 128px - 144px */ clamp(8rem, 7.6666rem + 0.00833333 * 100vw, 9rem)',
	'fluid-16': '/* 144px - 160px */ clamp(9rem, 8.6666rem + 0.00833333 * 100vw, 10rem)'
	// 'fluid-17':
	// 	'/* 160px - 200px */ clamp(10rem, 9.166666666666666rem + 0.020833333333333332 * 100vw, 12.5rem)'
};

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		container: false
	},
	darkMode: ['class', '[data-scheme="dark"]'],
	theme: {
		boxShadow: {
			50: '0 1px 4px -1px',
			100: '0 4px 16px -2px',
			200: '0 8px 32px -4px'
		},
		borderColor: {
			DEFAULT: 'hsla(204, 13%, 37%, 0.2)', // black coral opacity: 0.2
			black: {
				20: 'hsla(204, 13%, 37%, 0.2)', // black coral opacity: 0.2
				60: 'hsla(204, 13%, 37%, 0.6)', // black coral opacity: 0.6
				100: 'hsl(204, 13%, 37%)', // black coral,
				800: 'hsl(210, 6%, 13%)' // eerie black
			},
			linen: {
				20: 'hsl(30, 36%, 90%, 0.2)'
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: {
				10: 'hsla(0, 0%, 94%, 0.1)',
				90: 'hsla(0, 0%, 94%, 0.9)',
				100: 'hsl(0, 0%, 100%)',
				200: 'hsl(200, 9%, 96%)',
				300: 'hsl(0, 0%, 92%)' // platinum
			},
			linen: {
				100: 'hsl(30, 36%, 90%)', // linen
				200: 'hsl(45, 77%, 79%)' // medium champagne
			},
			orange: {
				50: 'hsl(13, 98%, 62%)',
				100: 'hsl(13, 98%, 52%)',
				200: 'hsl(13, 98%, 42%)'
			},
			lightblue: {
				100: 'hsl(184, 36%, 73%)', // middle blue light
				200: 'hsl(184, 36%, 63%)' // middle blue
			},

			lilac: {
				100: 'hsl(244, 50%, 80%)', // periwinkle
				200: 'hsl(244, 50%, 65%)', // tropical-indigo
				300: 'hsl(252, 51%, 57%)', // slate-blue
				400: 'hsl(252, 51%, 52%)', // iris
				500: 'hsl(252, 51%, 44%)' // rebecca-purple
			},
			blue: {
				800: 'hsl(240, 47%, 52%)', // ocean blue
				900: 'hsl(240, 47%, 42%)' // ocean blue dark
			},
			black: {
				100: 'hsl(204, 13%, 37%)', // black coral
				800: 'hsl(210, 6%, 13%)', // eerie black
				900: 'hsl(210, 6%, 10%)' // black
			}
		},

		fontSize: {
			xxl: '/* 48px - 72px */ clamp(3rem, 2.5rem + 0.0125 * 100vw, 4.5rem)',
			xl: '/* 32px - 48px */ clamp(2rem, 1.6666rem + 0.00833333 * 100vw, 3rem)',
			lg: '/* 24px - 32px */ clamp(1.5rem, 1.3333rem + 0.00416666 * 100vw, 2rem)',
			md: '/* 22px - 28px */ clamp(1.375rem, 1.25rem + 0.003125 * 100vw, 1.75rem)',
			sm: '/* 16px - 24px */ clamp(1rem, 0.8333rem + 0.00416666 * 100vw, 1.5rem)',
			xs: '/* 12px - 16px */ clamp(0.75rem, 0.6666rem + 0.00208333 * 100vw, 1rem)'
		},
		fontFamily: {
			DEFAULT: ['Golos Text', 'sans-serif'],
			monospace: ['Courier New', 'monospace']
		},
		extend: {
			spacing,
			borderRadius: spacing,
			keyframes: {
				ping: {
					'75%, 100%': { transform: 'scale(3)', opacity: 0 }
				}
			},
			animation: {
				ping: 'ping 2s ease-in-out infinite'
			}
		}
	},
	variants: {
		extend: {
			// ...
			saturate: ['hover', 'focus']
		}
	},
	plugins: []
};

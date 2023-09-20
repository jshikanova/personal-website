/** @type {import('tailwindcss').Config} */
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
			white: {
				10: 'hsla(0, 0%, 94%, 0.1)',
				90: 'hsla(0, 0%, 94%, 0.9)',
				100: 'hsl(0, 0%, 100%)',
				200: 'hsl(0, 0%, 92%)' // platinum
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
				100: 'hsla(0, 0%, 94%, 0.9)',
				200: 'hsl(244, 50%, 80%)', // periwinkle
				300: 'hsl(244, 50%, 65%)', // tropical-indigo
				400: 'hsl(252, 51%, 57%)', // slate-blue
				500: 'hsl(252, 51%, 52%)', // iris
				600: 'hsl(252, 51%, 44%)' // rebecca-purple
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
			xxl: '/* 56px - 72px */ clamp(3.5rem, 2.5rem + 0.0125 * 100vw, 4.5rem)',
			xl: '/* 40px - 48px */ clamp(2.5rem, 2rem + 0.0063 * 100vw, 3rem)',
			lg: '/* 28px - 32px */ clamp(1.75rem, 1.5rem + 0.0031 * 100vw, 2rem)',
			md: '/* 22px - 28px */ clamp(1.375rem, 1rem + 0.0047 * 100vw, 1.75rem)',
			sm: '/* 16px - 24px */ clamp(1rem, 0.5rem + 0.0063 * 100vw, 1.5rem)',
			xs: '/* 12px - 16px */ clamp(0.75rem, 0.5rem + 0.0031 * 100vw, 1rem)'
		},
		fontFamily: {
			DEFAULT: ['Golos Text', 'sans-serif']
		},
		extend: {
			spacing: {
				'fluid-1': '/* 2px - 4px */ clamp(0.125rem, 0rem + 0.0016 * 100vw, 0.25rem)',
				'fluid-2': '/* 4px - 8px */ clamp(0.25rem, 0rem + 0.0031 * 100vw, 0.5rem)',
				'fluid-3': '/* 8px - 12px */ clamp(0.5rem, 0.25rem + 0.0031 * 100vw, 0.75rem)',
				'fluid-4': '/* 12px - 16px */ clamp(0.75rem, 0.5rem + 0.0031 * 100vw, 1rem)',
				'fluid-5': '/* 16px - 24px */ clamp(1rem, 0.5rem + 0.0063 * 100vw, 1.5rem)',
				'fluid-6': '/* 24px - 32px */ clamp(1.5rem, 1rem + 0.0063 * 100vw, 2rem)',
				'fluid-7': '/* 32px - 40px */ clamp(2rem, 1.5rem + 0.0063 * 100vw, 2.5rem)',
				'fluid-8': '/* 40px - 48px */ clamp(2.5rem, 2rem + 0.0063 * 100vw, 3rem)',
				'fluid-9': '/* 48px - 56px */ clamp(3rem, 2.5rem + 0.0063 * 100vw, 3.5rem)',
				'fluid-10': '/* 56px - 64px */ clamp(3.5rem, 3rem + 0.0063 * 100vw, 4rem)',
				'fluid-11': '/* 64px - 80px */ clamp(4rem, 3rem + 0.0125 * 100vw, 5rem)',
				'fluid-12': '/* 80px - 96px */ clamp(5rem, 4rem + 0.0125 * 100vw, 6rem)',
				'fluid-13': '/* 96px - 112px */ clamp(6rem, 5rem + 0.0125 * 100vw, 7rem)',
				'fluid-14': '/* 112px - 128px */ clamp(7rem, 6rem + 0.0125 * 100vw, 8rem)',
				'fluid-15': '/* 128px - 144px */ clamp(8rem, 7rem + 0.0125 * 100vw, 9rem)',
				'fluid-16': '/* 144px - 160px */ clamp(9rem, 8rem + 0.0125 * 100vw, 10rem)'
			}
		}
	},
	plugins: []
};

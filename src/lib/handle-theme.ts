import { browser } from '$app/environment';

const darkModeClass = 'dark-mode';

export const handleTheme = () => {
	if (browser) {
		const root = document.documentElement;
		const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement;

		themeToggle?.addEventListener('change', () => {
			if (themeToggle.checked) {
				localStorage.setItem('theme', 'dark');
				root.classList.add(darkModeClass);
				root.style.colorScheme = 'dark';
			} else {
				localStorage.setItem('theme', 'light');
				root.classList.remove(darkModeClass);
				root.style.colorScheme = 'light';
			}
		});
	}
};

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
	namespace App {
		type Icon = SvelteComponentTyped<{ size?: string; strokeWidth?: number; class?: string }>;
		type Theme = 'light' | 'dark' | 'system';
		type Scheme = Exclude<Theme, 'system'>;
		type Settings = {
			theme: Theme;
		};
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

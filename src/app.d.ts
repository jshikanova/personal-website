// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

import type { SvelteHTMLElements } from 'svelte/elements';
declare global {
	namespace App {
		type Icon = SvelteComponentTyped<{ size?: string; strokeWidth?: number; class?: string }>;

		type Anchor = {
			href: string;
		} & Omit<SvelteHTMLElements['a'], 'href'>;

		type AnchorButton = Anchor & {
			tagName: 'a';
		};

		type Button = {
			tagName: 'button';
		} & SvelteHTMLElements['button'];

		type Input = {
			tagName: 'input';
			type: Extract<SvelteHTMLElements['input']['type'], 'button' | 'submit'>;
			value: string;
		} & Omit<SvelteHTMLElements['input'], 'type'>;

		type PostType = 'article' | 'note' | 'essay';
		// type PostCategories = 'sveltekit' | 'svelte';

		interface Post {
			title: string;
			slug: string;
			description: string;
			date: string;
			type: PostType;
			// categories: Categories[];
			published: boolean;
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};

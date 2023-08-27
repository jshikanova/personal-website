import { browser } from '$app/environment';

const settingsKey = 'settings';

type SettingsKeys = keyof App.Settings;

/**
 * Get single settings param stored in localStorage
 */
export const getSettingsParam = (key: SettingsKeys) => {
	if (browser) {
		const storageSettings = localStorage.getItem(settingsKey);
		const prevSettings = storageSettings ? JSON.parse(storageSettings) : null;

		if (prevSettings) {
			return prevSettings[key];
		}

		return null;
	}
};

/**
 * Update single settings param stored in localStorage
 */
export const setSettingsParam = (key: SettingsKeys, value: App.Settings[typeof key]) => {
	if (browser) {
		const prevSettings = JSON.parse(localStorage.getItem(settingsKey) || '{}');

		localStorage.setItem(settingsKey, JSON.stringify({ ...prevSettings, [key]: value }));
	}
};

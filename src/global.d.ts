/// <reference types="@sveltejs/kit" />

type Locales = import('$i18n/i18n-types').Locales
type TranslationFunctions = import('$i18n/i18n-types').TranslationFunctions

/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

declare namespace App {
	interface Locals {
		locale: Locales
		LL: TranslationFunctions
	}

	// interface Platform { }
}

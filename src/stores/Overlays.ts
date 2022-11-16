import {writable} from "svelte/store";

export const CookiesModalOpen = writable(false);

export const cookiesAllowed = writable(false);
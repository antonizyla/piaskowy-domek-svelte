import {writable} from "svelte/store";
import { persistentWritable } from "$lib/persistentStore";

export const cookiesModalOpen = writable(false);

export const persistStore = persistentWritable<object>("key", {"allowedCookies": true, "setCookies": false});
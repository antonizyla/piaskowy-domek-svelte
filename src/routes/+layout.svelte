<script lang="ts">

    import {onMount} from "svelte";

    let timeSinceMount = 0;
    onMount(() => {
        const interval = setInterval(() => {
            timeSinceMount += 1;
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });

    import {persistStore} from "../stores/Overlays";
    import {cookiesModalOpen} from "../stores/Overlays.js";

    import {setLocale} from '$i18n/i18n-svelte'
    import type {LayoutData} from './$types'

    export let data: LayoutData
    // at the very top, set the locale before you access the store and before the actual rendering takes place
    setLocale(data.locale)

    import CookiesOverlay from "$lib/components/CookiesOverlay.svelte";

    import "../app.css"
    import "$lib/components/basic/basic.css"

</script>

{#if ($cookiesModalOpen || !$persistStore.setCookies) && (timeSinceMount > 2)}
    <CookiesOverlay></CookiesOverlay>
{/if}

<slot/>

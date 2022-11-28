<script lang="ts">
    import {browser} from '$app/environment'
    import {page} from '$app/stores'
    import {setLocale, locale} from '../../../i18n/i18n-svelte'
    import type {Locales} from '../../../i18n/i18n-types'
    import {locales} from '../../../i18n/i18n-util'
    import {loadLocaleAsync} from '../../../i18n/i18n-util.async'
    import {replaceLocaleInUrl} from '../../../utils'

    const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
        if (!newLocale || $locale === newLocale) return
        // load new dictionary from server
        await loadLocaleAsync(newLocale)
        // select locale
        setLocale(newLocale)
        // update `lang` attribute
        document.querySelector('html').setAttribute('lang', newLocale)
        if (updateHistoryState) {
            // update url to reflect locale changes
            history.pushState({locale: newLocale}, '', replaceLocaleInUrl(location.pathname, newLocale))
        }
    }

    // update locale when navigating via browser back/forward buttons
    const handlePopStateEvent = async ({state}: PopStateEvent) => switchLocale(state.locale, false)

    // update locale when page store changes
    $: if (browser) {
        const lang = $page.params.lang as Locales
        switchLocale(lang, false)
        history.replaceState({...history.state, locale: lang}, '', replaceLocaleInUrl(location.pathname, lang))
    }
</script>

<svelte:window on:popstate={handlePopStateEvent}/>

<div class="flex flex-row gap-4 mr-8">
    {#each locales as local}
        <button type="button" class="text-inherit hover:scale-110 transition" class:active={local === $locale}  on:click={() => switchLocale(local)} >{local}</button>
    {/each}
</div>

<style lang="postcss">
    .active {
        @apply font-bold scale-[115%] border-b-2
    }
</style>
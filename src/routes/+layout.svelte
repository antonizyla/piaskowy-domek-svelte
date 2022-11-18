<script lang="ts">
    import LL, {setLocale} from '$i18n/i18n-svelte'
    import type {LayoutData} from 'types'

    export let data: LayoutData
    // at the very top, set the locale before you access the store and before the actual rendering takes place
    setLocale(data.locale)

    import "../app.postcss"

    import Nav from '$lib/components/Nav.svelte'

</script>

<main class="bg-blue-200">
    <Nav class=""></Nav>
    <slot/>
</main>
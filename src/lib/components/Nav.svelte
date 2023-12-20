<script lang="ts">

    import {fade} from "svelte/transition";

    import MdDehaze from 'svelte-icons/md/MdDehaze.svelte'
    import MdClose from 'svelte-icons/md/MdClose.svelte'

    export let lightText = true;

    import LocaleSelector from "./basic/LocaleSelector.svelte";

    import LL from '$i18n/i18n-svelte'
    import {unwrapArray} from '$lib/unwrapArray'

    let hamburgerOpen = false;

    function toggle_open(): void {
        hamburgerOpen = !hamburgerOpen;
    }

    let windowWidth: number;
    let scrollY: number;

    function stopScroll(scrollY: number): void {
        if (hamburgerOpen) {
            window.scrollTo(0, 0);
        }
    }

    $: stopScroll(scrollY);

</script>

<svelte:window bind:outerWidth={windowWidth} bind:scrollY={scrollY}/>

<nav class="w-screen" aria-label="Main" id="Main">
    {#if windowWidth <= 1024}
        <!-- Mobile / tablet View -->
        {#if hamburgerOpen}
            <!-- Open Hamburger Menu -->
            <div class="flex flex-col justify-between h-screen w-screen self-center bg-slate-300 text-lg">
                <div class="flex flex-row justify-between p-6">
                    <h2><a class="text-xl" href="/">{$LL.nav.heading()}</a></h2>
                    <button on:click={toggle_open} in:fade|global >
                        <div class="h-[32px]">
                            <MdClose></MdClose>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col justify-center p-5">
                    <div class="p-2 text-lg">
                        <LocaleSelector></LocaleSelector>
                    </div>
                    {#each unwrapArray($LL.nav.links) as link}
                        <a class="p-2" href={link.href()}>{link.label()}</a>
                    {/each}
                    <a class="p-2 " href={$LL.nav.cta.label()}>{$LL.nav.cta.label()}</a>
                </div>
                <div></div> <!-- Empty div for flexbox alignment -->
            </div>
        {:else}
            <!-- Closed Hamburger Menu mobile view -->
            <div class="flex flex-row justify-between p-6 text-xl">
                <h2>
                    <a class="font-semibold" class:text-gray-50={lightText} href='/'>{$LL.nav.heading()}</a
                    >
                </h2>
                <button on:click={toggle_open} in:fade|global>
                    <div class="h-[32px] text-white">
                        <MdDehaze></MdDehaze>
                    </div>
                </button>
            </div>
        {/if}
    {:else}
        <!-- Desktop View -->
        <div class="px-28">
            <div
                    class="flex flex-row justify-between py-5 m-auto items-center pt-8 text-lg max-w-screen-xl"
            >
                <h2>
                    <a class="text-xl font-bold" class:text-gray-50={lightText} href='/'
                    >{$LL.nav.heading()}</a
                    >
                </h2>
                <div class="flex" class:text-gray-50={lightText}>
                    <LocaleSelector></LocaleSelector>
                    {#each unwrapArray($LL.nav.links) as link}
                        <a class="px-3 " class:text-gray-50={lightText} href={link.href()}>{link.label()}</a>
                    {/each}
                    <a class="pl-3" class:text-gray-50={lightText} href={$LL.nav.cta.href()}>{$LL.nav.cta.label()}</a>
                </div>
            </div>
        </div>
    {/if}
</nav>

<script lang="ts">

    import LL from '$i18n/i18n-svelte'
    import {unwrapArray} from '$lib/unwrapArray.ts'

    let hamburgerOpen = false;

    function toggle_open(): void {
        hamburgerOpen = !hamburgerOpen;
    }

    let windowWidth: number;
    let scrollY: number;

    function stopScroll(scrollY): void{
        if (hamburgerOpen){
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
                    <button on:click={toggle_open}>Toggle</button>
                </div>
                <div class="flex flex-col justify-center p-5">
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
                    <a class="text-gray-50 font-semibold" href='/'>{$LL.nav.heading()}</a
                    >
                </h2>
                <button on:click={toggle_open}>Toggle</button>
            </div>
        {/if}
    {:else}
        <!-- Desktop View -->
        <div class="px-28">
            <div
                    class="flex flex-row justify-between py-5 m-auto items-center pt-8 text-lg max-w-screen-xl"
            >
                <h2>
                    <a class="text-xl font-bold text-gray-50 " href='/'
                    >{$LL.nav.heading()}</a
                    >
                </h2>
                <div>
                    {#each unwrapArray($LL.nav.links) as link}
                        <a class="px-3 text-gray-50 " href={link.href()}>{link.label()}</a>
                    {/each}
                    <a class="pl-3 text-gray-50" href={$LL.nav.cta.href()}>{$LL.nav.cta.label()}</a>
                </div>
            </div>
        </div>
    {/if}
</nav>

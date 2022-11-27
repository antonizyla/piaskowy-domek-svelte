<script lang="ts">

    export let title: string;
    export let content: string;

    export let open = false;

    function toggle_closed(): void {
        open = !open;
    }

    import IoIosArrowDown from 'svelte-icons/io/IoIosArrowDown.svelte'
    import IoIosArrowUp from 'svelte-icons/io/IoIosArrowUp.svelte'

    import {fade} from "svelte/transition";

</script>

<div class="">
    <button on:click={()=>toggle_closed()} class="p-3 w-full flex flex-row justify-between">
        <div class="">{title}</div>
        <div class="h-[32px] w-[32px] text-gray-800">
            {#if (open)}
                <div in:fade={{duration: 500}}>
                    <IoIosArrowUp></IoIosArrowUp>
                </div>
            {:else}
                <div in:fade={{duration: 500}}>
                    <IoIosArrowDown></IoIosArrowDown>
                </div>
            {/if}
        </div>
    </button>
    {#if (open)}
        <div class="p-3 px-4 ">{content}</div>
    {/if}
</div>

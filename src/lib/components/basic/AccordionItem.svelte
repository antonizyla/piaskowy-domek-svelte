<script lang="ts">
    export let title: string;
    export let content: string;

    export let open = false;

    function toggle_closed(): void {
        open = !open;
    }

   //$: console.log(open)
</script>

<div class="m-2">
    <div class="p-2 flex flex-row justify-between">
        <div class="">{title}</div>
        {#if (open)}
            <button on:click={() => toggle_closed()}>Toggle {title}</button>
        {:else}
            <button on:click={() => toggle_closed()}>Toggle (Closed) {title}</button>
        {/if}
    </div>
    {#if (open)}
        <div class="">{content}</div>
    {/if}
</div>
<script lang="ts">
    export let title: string;
    export let content: string;

    export let closed = true;

    function toggle_closed(): void {
        closed = !closed;
    }
</script>

<div class="m-2">
    <div class="p-2 flex flex-row justify-between">
        <div class="">{title}</div>
        {#if (!closed)}
            <button on:click={() => toggle_closed()}>Toggle</button>
        {:else}
            <button on:click={() => toggle_closed()}>Toggle (Closed)</button>
        {/if}
    </div>
    {#if (!closed)}
        <div class="">{content}</div>
    {/if}
</div>
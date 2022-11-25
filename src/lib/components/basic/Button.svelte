<script lang="ts">
    export let rounded = false;
    export let inverted = false;
</script>

<button
        on:click
        class:std-button={!inverted}
        class:rounded-full={rounded}
        class:inverted-button={inverted}
>
    <slot/>
</button>

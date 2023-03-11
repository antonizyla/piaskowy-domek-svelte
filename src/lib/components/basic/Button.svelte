<script lang="ts">
    export let rounded = false;
    export let inverted = false;
    
    export let formaction = "";

</script>

<button
        on:click
        formaction={formaction}
        class:std-button={!inverted}
        class:rounded-full={rounded}
        class:inverted-button={inverted}
>
    <slot/>
</button>

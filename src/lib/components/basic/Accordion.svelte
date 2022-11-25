<script lang="ts">
    import AccordionItem from "./AccordionItem.svelte";

    import {Queue} from "$lib/queue";

    let openAccordionItems = new Queue(3);

    let accordionItems = [
        {title: "Item 1", content: "Content 1"},
        {title: "Item 2", content: "Content 2"},
        {title: "Item 3", content: "Content 3"},
    ]

</script>

{#each accordionItems as item}
    <AccordionItem
        title={item.title}
        content={item.content}
    />
{/each}
<script lang="ts">
    import AccordionItem from "./AccordionItem.svelte";
    import {Queue} from "../../queue";

    export let maxOpen = 3; // set to 0 for no limit

    let openItems = new Queue(maxOpen);

    let accordionItems = [
        {id: 1, title: "Item 1", content: "Content 1", open: true},
        {id: 2, title: "Item 2", content: "Content 2", open: false},
        {id: 3, title: "Item 3", content: "Content 3", open: false},
        {id: 4, title: "Item 4", content: "Content 4", open: false},
        {id: 5, title: "Item 5", content: "Content 5", open: false},

    ]

    // set all initially open components into the queue
    // assuming that no. of preset open boxes is less than limit
    function initialize(): void {
        accordionItems.forEach((item) => {
            if (item.open) {
                openItems.enqueue(Number(item.id));
            }
        });
    }

    initialize();

    function updateQueue() : void {
        // check for any differences between table and queue
        // put differences into queue
        // if an item is dequeued close in table
        if (maxOpen === 0) return;
        for (let i = 0; i < accordionItems.length; i++) {
            const currId = Number(accordionItems[i].id);
            const currOpen = Number(accordionItems[i].open);
            // if the table is closed but open in queue -> close in queue
            if (openItems.mapRep.has(currId) && !currOpen) {
                openItems.remove(currId);
            } else if (!openItems.mapRep.has(currId) && currOpen) {
                let r1 = openItems.last_removed;
                // if open in the table but not in queue add item to queue
                openItems.enqueue(currId)
                // if item gets removed / overflows queue have to update table
                let r2 = openItems.last_removed;
                if (r1 !== r2) {
                    for (let k = 0; k < accordionItems.length; k++) {
                        const kId = Number(accordionItems[k].id);
                        if (r2 === kId) {
                            accordionItems[k].open = false;
                        }
                    }
                }
            }
        }
    }

    $: {
        accordionItems;
        updateQueue(); // run update Queue when accordionItems Changes
    }

</script>

{#each accordionItems as item}
    <AccordionItem
            title={item.title}
            content={item.content}
            bind:open={item.open}
    />
{/each}
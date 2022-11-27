<script lang="ts">
    import LL from '$i18n/i18n-svelte'
    import {unwrapArray} from '$lib/unwrapArray.ts'

    import AccordionItem from "./AccordionItem.svelte";
    import {Queue} from "../../queue";

    export let maxOpen = 2; // set to 0 for no limit

    let openItems = new Queue(maxOpen);

    // desired keys are id, title, content, open
    let clean = [];
    let a = unwrapArray($LL.accordion.items)
    a.forEach((item) => {
        let tmp = {};
        Object.assign(tmp, {id: Number(item.id())})
        Object.assign(tmp, {title: item.title()})
        Object.assign(tmp, {content: item.content()})
        Object.assign(tmp, {open: item.open() === "true"})
        clean.push(tmp)
    });
    let accordionItems = clean;

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

    function updateQueue(): void {
        // check for any differences between table and queue
        // put differences into queue
        // if an item is dequeued close in table
        if (maxOpen === 0) return;
        for (let i = 0; i < accordionItems.length; i++) {
            const currId = Number(accordionItems[i].id);
            const currOpen = Number((accordionItems[i].open));
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
        console.log(accordionItems)
    }

</script>

<div class="divide-y divide-gray-600 divide-2">
    {#each accordionItems as item}
        <div class="first:mt-2 mx-2 last:mb-2 ">
            <AccordionItem
                    title={item.title}
                    content={item.content}
                    bind:open={item.open}
            />
        </div>
    {/each}
</div>
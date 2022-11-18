<script lang="ts">
    import {writable} from "svelte/store";

    export let aria_label: string;
    export let aria_desc: string;

    export let overlay: writable<boolean>;
</script>

<div role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDescription"
     on:click={() => {overlay.set(false);}}
     class="z-10 text-center w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-700 opacity-95">
    <div on:click|stopPropagation class="bg-gray-100 text-white px-8 py-10 relative max-w-lg rounded-md">
        <button role="button" aria-label="Close" on:click={()=>{overlay.set(false)}}
                class="absolute  top-1 right-3 text-4xl text-gray-400 hover:-translate-y-0.5 transition-transform">
            &times;
        </button>
        <p style="display: none" id="dialogTitle">{aria_label}</p>
        <p style="display: none" id="dialogDescription">{aria_desc}</p>
        <slot></slot>
    </div>
</div>

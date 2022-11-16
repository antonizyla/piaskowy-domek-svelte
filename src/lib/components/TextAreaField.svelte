<script lang="ts">
    export let label: string;
    export let required = true;
    export let id: string;
    export let name: string;
    export let rows = 7;
    export let placeholder: string;
</script>

<div class="h-full w-full p-2 bg-blue-400">
    <div class="p-1">{label}</div>
    <textarea class="border-blue-700 border-2 p-2 w-full" rows={rows} placeholder={placeholder} id={id} name={name} >
    </textarea>
    <div class="text-red-400 text-center text-sm p-1">
        {required ? "* Required" : ""}
    </div>

</div>
<script lang="ts">
    export let placeholder = "example@gmail.com";
    export let id = "email";
    export let label: string;
    export let required = true;

    let email = "";

</script>

<div class="flex flex-col bg-red-200 w-full p-2 ">
    <div class="p-1">{label} </div>
    <input bind:value={email} class="p-3 border-blue-700 border-2 min-w-full" type="text" name="email" id={id} placeholder={placeholder}
           required={required}>
    <div class="text-red-400 text-sm text-center p-1">{required ? "* Required" : ''}</div>
</div>
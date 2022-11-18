<script lang="ts">
    export let placeholder: string;
    export let id = "message";
    export let label: string;
    export let required;
    export let validationMessage = "* Required";
    export let autocomplete = false;
    export let name: string;
    export let rows = 7;

    if (required === "") {
        required = true;
    } else {
        required = required === "true";
    }

    let message = "";
    let valid: boolean;

    // function validateMessage(message: string) {
    //     if ((required && message.length > 20) || message.length === 0) {
    //         valid = true;
    //     } else valid = !(required && message.length < 21);
    // }

    function validateMessage(msg:string){
        if (required) {
            if (msg.length > 20 || msg.length === 0) {
                valid = true;
            } else {
                valid = false;
            }
        }else{
            valid = true;
        }
    }

    $: validateMessage(message);

</script>

<div class="h-full w-full p-2">
    <div class="flex flex-row">
        <div class="p-1">{label}</div>
        {#if required}
            <div class="form-warning">*</div>
        {/if}
    </div>
    <textarea
            bind:value={message}
            class="border-blue-700 border-2 p-2 w-full"
            class:invalid-field={!valid}
            rows={rows}
            placeholder={placeholder}
            id={id}
            name={name}
            required={required ? "required" : ""}
            autocomplete={autocomplete ? "on" : "off"}
    ></textarea>
    {#if !valid}
        <div class="form-warning">{validationMessage}</div>
    {/if}
</div>
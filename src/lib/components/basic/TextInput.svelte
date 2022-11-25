<script lang="ts">

    export let placeholder = "Text Goes here ...";
    export let id = "email";
    export let label: string;
    export let required;
    export let validationMessage = "* Required";
    export let autocomplete = false;
    export let name: string;
    export let minInputLength = 6;

    if (required === "") {
        required = true;
    } else  {
        required = (required === "true");
    }

    let input = "";
    let valid: boolean;

    function validateMessage(message: string) {
        if (required) {
            valid = message.length > minInputLength - 1 || message.length === 0;
        } else {
            valid = true;
        }
    }

    console.log(required)

    $: validateMessage(input);

</script>

<div class="flex flex-col w-full p-2 ">
    <div class="flex flex-row">
        <div class="p-1">{label}</div>
        {#if required}
            <div class="form-warning">*</div>
        {/if}
    </div>
    <input bind:value={input}
           class="form-field"
           class:invalid-field={!valid}
           type="text"
           name={name}
           id={id}
           placeholder={placeholder}
           required={required ? "required" : ""}
           autocomplete={autocomplete ? "on" : "off"}
    >
    {#if !valid}
        <div class="form-warning">{validationMessage}</div>
    {/if}
</div>
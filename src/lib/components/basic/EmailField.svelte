<script lang="ts">
    export let placeholder = "example@gmail.com";
    export let id = "email";
    export let label: string;
    export let required = true;
    export let validationMessage = "* Required";
    export let autocomplete = false;
    export let name: string;

    let email = "";
    let valid: boolean;

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateEmail(email: string) {
        valid = emailRe.test(email) || email.length === 0;
    }

    $: validateEmail(email);
</script>

<div class="flex flex-col w-full p-2 ">
    <div class="flex flex-row">
        <div class="p-1">{label}</div>
        {#if required}
            <div class="form-warning">*</div>
        {/if}
    </div>
    <input bind:value={email}
           class="p-3 border-blue-700 border-2 min-w-full"
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
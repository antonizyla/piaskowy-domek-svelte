<script lang="ts">
    import LL from '$i18n/i18n-svelte'

    import EmailField from "./basic/EmailField.svelte";
    import TextAreaField from "./basic/TextAreaField.svelte";

</script>

<form action="" class="max-w-[600px] p-12 border-2 border-blue-700">
    <EmailField
            placeholder={$LL.contactForm.fields.email.placeholder()}
            label={$LL.contactForm.fields.email.label()}
            validationMessage={$LL.contactForm.fields.email.validationText()}
    >
    </EmailField>

    <TextAreaField
            placeholder={$LL.contactForm.fields.message.placeholder()}
            label={$LL.contactForm.fields.message.label()}
            validationMessage={$LL.contactForm.fields.message.validationText()}
    >
    </TextAreaField>
    <button type="submit">Submit Form</button>
</form>

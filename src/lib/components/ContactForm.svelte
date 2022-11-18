<script lang="ts">
    import LL from '$i18n/i18n-svelte'

    import EmailField from "./basic/EmailField.svelte";
    import TextAreaField from "./basic/TextAreaField.svelte";
    import TextInput from "$lib/components/basic/TextInput.svelte";


</script>

<form action="" class="max-w-[600px] p-12 border-2 border-blue-700">
    <TextInput
            placeholder={$LL.contactForm.fields.name.placeholder()}
            label={$LL.contactForm.fields.name.label()}
            validationMessage={$LL.contactForm.fields.name.validationText()}
            name="name"
            required={$LL.contactForm.fields.name.required()}
    >
    </TextInput>
    <EmailField
            placeholder={$LL.contactForm.fields.email.placeholder()}
            label={$LL.contactForm.fields.email.label()}
            validationMessage={$LL.contactForm.fields.email.validationText()}
            name="email"
            required={$LL.contactForm.fields.email.required()}
    >
    </EmailField>
    <TextInput
            placeholder={$LL.contactForm.fields.subject.placeholder()}
            label={$LL.contactForm.fields.subject.label()}
            validationMessage={$LL.contactForm.fields.subject.validationText()}
            name="subject"
            required={$LL.contactForm.fields.subject.required()}
    >
    </TextInput>
    <TextAreaField
            placeholder={$LL.contactForm.fields.message.placeholder()}
            label={$LL.contactForm.fields.message.label()}
            validationMessage={$LL.contactForm.fields.message.validationText()}
            name="message"
            required={$LL.contactForm.fields.message.required()}
    >
    </TextAreaField>


    <button class="p-2 m-2" type="submit">Submit Form</button>
</form>

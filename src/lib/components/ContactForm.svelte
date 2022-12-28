<script lang="ts">
    import type {PageData, ActionData} from './$types';

    import LL from '$i18n/i18n-svelte'

    import EmailField from "./basic/EmailField.svelte";
    import TextAreaField from "./basic/TextAreaField.svelte";
    import TextInput from "$lib/components/basic/TextInput.svelte";
    import Button from "$lib/components/basic/Button.svelte";

    export let data: PageData;
    export let form: ActionData;

</script>

<form action="?/contact" method="POST" class="max-w-[600px] p-12 border-2 border-blue-700">
    <div class="mb-1">
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
    </div>
    <Button inverted={true} rounded={true}>Submit Form</Button>
</form>

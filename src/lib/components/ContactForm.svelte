<script lang="ts">
	import type { PageData, ActionData } from './$types';

	import LL, { locale } from '$i18n/i18n-svelte';

	import EmailField from './basic/EmailField.svelte';
	import TextAreaField from './basic/TextAreaField.svelte';
	import TextInput from '$lib/components/basic/TextInput.svelte';
	import Button from '$lib/components/basic/Button.svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

<form action="en?/contact" method="POST" class="max-w-[600px] p-12 border-2 border-blue-700">
	<div class="mb-1">
		<TextInput
			placeholder={$LL.contactForm.fields.name.placeholder()}
			label={$LL.contactForm.fields.name.label()}
			validationMessage={$LL.contactForm.fields.name.validationText()}
			name="name"
			required={false}
		/>
		<EmailField
			placeholder={$LL.contactForm.fields.email.placeholder()}
			label={$LL.contactForm.fields.email.label()}
			validationMessage={$LL.contactForm.fields.email.validationText()}
			name="email"
			required={false}
		/>
		<TextInput
			placeholder={$LL.contactForm.fields.subject.placeholder()}
			label={$LL.contactForm.fields.subject.label()}
			validationMessage={$LL.contactForm.fields.subject.validationText()}
			name="subject"
			required={false}
		/>
		<TextAreaField
			placeholder={$LL.contactForm.fields.message.placeholder()}
			label={$LL.contactForm.fields.message.label()}
			validationMessage={$LL.contactForm.fields.message.validationText()}
			name="message"
			required={false}
		/>
	</div>
	<Button inverted={true} rounded={true} formaction="en?/contact">Submit Form</Button>
</form>

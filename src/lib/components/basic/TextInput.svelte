<script lang="ts">
	export let placeholder = 'Text Goes here ...';
	export let id = 'email';
	export let label: string;
	export let required: boolean;
	export let validationMessage = '* Required';
	export let autocomplete = false;
	export let name: string;
	export let minInputLength = 6;

	let input = '';
	let valid: boolean;

	function validateMessage(message: string) {
		if (required) {
			valid = message.length > minInputLength - 1 || message.length === 0;
		} else {
			valid = true;
		}
	}

	$: validateMessage(input);
</script>

<div class="flex flex-col w-full p-2 ">
	<div class="flex flex-row">
		<div class="p-1">{label}</div>
		{#if required}
			<div class="form-warning">*</div>
		{/if}
	</div>
	<input
		bind:value={input}
		class="form-field"
		class:invalid-field={!valid}
		type="text"
		{name}
		{id}
		{placeholder}
		{required}
		autocomplete={autocomplete ? 'on' : 'off'}
	/>
	{#if !valid}
		<div class="form-warning">{validationMessage}</div>
	{/if}
</div>


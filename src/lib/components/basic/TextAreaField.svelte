<script lang="ts">
	export let placeholder: string;
	export let id = 'message';
	export let label: string;
	export let required: boolean;
	export let validationMessage = '* Required';
	export let autocomplete = false;
	export let name: string;
	export let rows = 7;

	let message = '';
	let valid: boolean;

	function validateMessage(msg: string) {
		if (required) {
			valid = msg.length > 20 || msg.length === 0;
		} else {
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
		class="form-field"
		class:invalid-field={!valid}
		{rows}
		{placeholder}
		{id}
		{name}
		{required}
		autocomplete={autocomplete ? 'on' : 'off'}
	/>
	{#if !valid}
		<div class="form-warning">{validationMessage}</div>
	{/if}
</div>


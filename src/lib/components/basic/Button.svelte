<script lang="ts">
	export let round = false;
</script>

<button
	on:click
	class="p-3 px-5 m-2 bg-blue-400 border-blue-700 border-2 hover:bg-blue-700 hover:text-blue-100 font-medium transition duration-150 ease-in-out hover:scale-105 hover:font-semibold"
	class:rounded-full={round}
>
	<slot />
</button>

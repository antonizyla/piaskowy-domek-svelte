<script lang="ts">
	import { navbar } from '$lib/content/nav';

	let hamburgerOpen = false;

	function toggle_open(): void {
		hamburgerOpen = !hamburgerOpen;
	}


	let windowWidth: number;
</script>

<svelte:window bind:outerWidth={windowWidth} />

<div class="w-screen">
	{#if windowWidth <= 1024}
		<!-- Mobile / tablet View -->
		{#if hamburgerOpen}
			<!-- Open Hamburger Menu -->
			<div class="flex flex-col justify-between h-screen w-screen self-center bg-slate-300 text-lg">
				<div class="flex flex-row justify-between p-6">
					<h2><a class="text-xl" href={navbar.heading.href}>{navbar.heading.label}</a></h2>
					<button on:click={toggle_open}>Toggle</button>
				</div>
				<div class="flex flex-col justify-cente p-5">
					{#each navbar.links as link}
						<a class="p-2" href={link.href}>{link.label}</a>
					{/each}
					<a class="p-2 " href={navbar.cta.href}>{navbar.cta.label}</a>
				</div>
				<div />
			</div>
		{:else}
			<!-- Closed Hamburger Menu mobile view -->
			<div class="flex flex-row justify-between p-6 text-xl">
				<h2>
					<a class="text-gray-50 font-semibold" href={navbar.heading.href}>{navbar.heading.label}</a
					>
				</h2>
				<button on:click={toggle_open}>Toggle</button>
			</div>
		{/if}
	{:else}
		<!-- Desktop View -->
		<div
			class="flex flex-row justify-between py-5 m-auto px-28 items-center pt-8 text-lg"
			style="max-width: 1600px;"
		>
			<h2>
				<a class="text-xl font-bold text-gray-50 " href={navbar.heading.href}
					>{navbar.heading.label}</a
				>
			</h2>
			<div>
				{#each navbar.links as link}
					<a class="px-3 text-gray-50 " href={link.href}>{link.label}</a>
				{/each}
				<a class="pl-3 text-gray-50" href={navbar.cta.href}>{navbar.cta.label}</a>
			</div>
		</div>
	{/if}
</div>

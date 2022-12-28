<script lang="ts">
    import LL from "$i18n/i18n-svelte"

    import Container from "$lib/components/basic/Container.svelte";
</script>

<Container>
    <h1 class="text-center font-bold text-6xl text-gray-50 mb-3">{$LL.splash.mainHeading()}</h1>
    <p class="text-center font-medium text-2xl text-gray-50 ">{$LL.splash.subtext()}</p>
    <div class="text-gray-50 font-medium text-2xl text-center mt-32">
        {$LL.splash.cta()}
    </div>
</Container>

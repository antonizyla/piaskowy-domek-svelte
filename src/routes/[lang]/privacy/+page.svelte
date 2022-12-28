<script lang="ts">
    import LL from "$i18n/i18n-svelte"

    import Nav from "$lib/components/Nav.svelte";
    import Container from "$lib/components/basic/Container.svelte";
    import Button from "$lib/components/basic/Button.svelte";

    import {cookiesModalOpen} from "../../../stores/Overlays";
</script>

<Nav lightText={false}></Nav>

<Container>
    <div class="p-8 flex flex-col justify-center py-12">
        <h1 class="text-center font-bold text-4xl">{$LL.privacy.heading()}</h1>
        <p class="pt-8">{$LL.privacy.paragraph()}</p>
        <div class="pt-8 mx-auto">
            <Button on:click={()=>{$cookiesModalOpen = !$cookiesModalOpen}}>{$LL.privacy.changeButton()}</Button>
        </div>
    </div>
</Container>





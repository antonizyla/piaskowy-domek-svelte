<script lang="ts">
    import Overlay from "./basic/Overlay.svelte";
    import Button from "./basic/Button.svelte";

    import {persistStore} from "../../stores/Overlays";

    import {cookiesModalOpen} from "../../stores/Overlays";

    let title = "Cookies"
    let desc = "This Site Uses Cookies for analytics purposes as well as for storing your cookies preference and langauge preference. Closing this prompt without choosing an option will assume you allowed Cookies, this can be changed on the Cookies Page. "
    let findOutMore = "Find out More Here";
    let allowCookies = "Allow Non Essential Cookies";
    let rejectCookies = "Reject Non Essential Cookies";

</script>

<Overlay statusStore={cookiesModalOpen} cookiesModal={true}>
    <h2 class="text-2xl text-black pb-3">{title}</h2>
    <p class="text-md text-black p-2 pb-4">{desc}   <a class="text-blue-600 underline font-semibold"
                                                       href="/">{findOutMore}</a>
    </p>
    <Button on:click={() => {$persistStore.allowedCookies = false; $persistStore.setCookies = true; cookiesModalOpen.set(false)}}>{rejectCookies}</Button>
    <Button on:click={() => {$persistStore.allowedCookies = true; $persistStore.setCookies = true; cookiesModalOpen.set(false)}}>{allowCookies}</Button>
</Overlay>
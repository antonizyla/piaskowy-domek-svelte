<script lang="ts">

    import {persistStore} from "../../stores/Overlays";
    import {cookiesModalOpen} from "../../stores/Overlays";
    import CookiesOverlay from "$lib/components/CookiesOverlay.svelte";

    import background from "$lib/assets/Apartment_16.jpg?format=webp&width=1920&brightness=0.8";

    import ContactForm from "$lib/components/ContactForm.svelte";
    import Nav from "$lib/components/Nav.svelte";
    import Accordion from "$lib/components/basic/Accordion.svelte";
    import Splash from "$lib/components/Splash.svelte";

</script>

<div class="wrapper" style:background-image={`url(${background})`}>
    <div class="flex flex-col h-screen w-screen bg justify-between">
        <Nav></Nav>
        <Splash></Splash>
        <div></div>
    </div>
</div>

<ContactForm></ContactForm>

<Accordion></Accordion>

<style lang="scss">
  .wrapper {
    background-position: center center;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
  }

  @media (max-width: 1024px) {
    .wrapper::before {
      background-position: 25% 50%;
    }
  }
</style>
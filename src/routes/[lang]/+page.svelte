<script lang="ts">

    import background from "$lib/assets/Apartment_16.jpg?format=webp&width=1920";

    import LL from '$i18n/i18n-svelte'
    import ContactForm from "$lib/components/ContactForm.svelte";
    import Nav from "$lib/components/Nav.svelte";

    import Container from "$lib/components/basic/Container.svelte";
</script>

<div class="wrapper " style="--image: url({background})">
    <div class="flex flex-col h-screen w-screen bg justify-between">
        <Nav></Nav>
        <Container>
            <h1 class="text-center font-bold text-6xl text-gray-50 mb-3">Piaskowy Domek Leba</h1>
            <p class="text-center font-medium text-2xl text-gray-50 ">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam</p>
            <div class="text-gray-50 font-medium text-2xl text-center mt-32">
                Cta Section
            </div>
        </Container>
        <div></div>
    </div>
</div>
text
<ContactForm></ContactForm>

<style lang="scss">
  .wrapper::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    background-image: var(--image);
    background-size: cover;
    background-position: center;
    z-index: -2;
  }

  @media (max-width: 1024px) {
    .wrapper::before {
      background-position: 25% 50%;
    }
  }
</style>
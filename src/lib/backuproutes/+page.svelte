<script lang="ts">
    import image from '../assets/Apartment_16.jpg';
    import {hero} from '../content/hero';
    import Nav from '../components/Nav.svelte';
    import Button from '../components/Button.svelte';
    import EmailField from "../components/EmailField.svelte";
    import TextAreaField from "../lib/components/TextAreaField.svelte";

    import {CookiesModalOpen} from "../stores/Overlays.js";
    import {cookiesAllowed} from "../stores/Overlays.js";
    import CookiesOverlay from "../lib/components/CookiesOverlay.svelte";


</script>


{#if (($CookiesModalOpen === false) && ($cookiesAllowed === null))}
    <CookiesOverlay></CookiesOverlay>
{/if}


<div class="wrapper" style="--image: url({image})">
    <!--	<img id="hidden-image" srcset={image} loading="eager" style="display: none" alt="">-->
    <div class="flex flex-col h-screen background">
        <Nav/>
        <div class="text-center flex flex-col m-auto">
            <h1 class="text-5xl text-gray-50 font-bold px-8 leading-normal ">{hero.hero_text}</h1>
            <p class="text-lg text-gray-50 pt-4 px-16 max-content font-semibold ">{hero.sub_text}</p>
        </div>

        <a
                href={hero.cta.href}
                class="text-center p-5 mb-20 text-gray-50 font-semibold transition duration-150 ease-in-out hover:scale-110"
        >{hero.cta.text}</a
        >
    </div>
</div>

<Button round>Flat Button</Button>
<EmailField id="email" placeholder="john@smith.com" label="Email" required={true}></EmailField>
<TextAreaField id="message" name="message" placeholder="Your Message Here ..." label="Message"
               resizeable></TextAreaField>


<style lang="scss">
  .wrapper::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: var(--image);
    background-size: cover;
    filter: brightness(80%);
    z-index: -2;
  }
</style>

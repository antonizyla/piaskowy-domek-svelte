import type {Translation} from '../i18n-types'

const pl: Translation = {
    // TODO: translations go here
    nav: {
        heading: 'Piaskowy Domek Łeba',
        links: [
            {label: 'Gallery', href: '/'},
            {label: 'About', href: '/'}
        ],
        cta: {label: 'Contact', href: '/'},
        accessibility: {
            arialabel: 'Primary',
            id: 'Primary Navigation'
        }
    },
    footer: {
        heading: 'Piaskowy Domek Łeba',
        links: [
            {label: 'Gallery', href: '/'},
            {label: 'About', href: '/'},
            {label: 'Contact', href: '/'}
        ],
        icons: [
            {
                href: "booking.com/hotel/pl/piaskowy-domek",
                icon: "booking",
                alt: "Booking.com link to book"
            },
            {
                href: "Tripadvisor.com",
                icon: "tripadvisor",
                alt: "View Tripadvisor reviews"
            },
            {
                href: "www.github.com/antonizyla/piaskowy-domek-svelte",
                icon: "github",
                alt: "github site repo"
            },
        ],
        acccessibility: {
            arialabel: 'Footer',
            id: 'Footer Navigation'
        }
    }
}

export default pl
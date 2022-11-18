import type {BaseTranslation} from '../i18n-types'

const en: BaseTranslation = {
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
    contactForm: {
        fields: {
            email: {
                label: 'Email',
                placeholder: 'yourname@gmail.com',
                validationText: 'Email is required',
                required: "true"
            },
            message:{
                label: 'Message',
                placeholder: 'Your message ...',
                validationText: 'Message of at least 20 chars is required',
                required: "true"
            },
            name:{
                label: 'Name',
                placeholder: 'John Smith',
                validationText: 'Name is required',
                required: "true"
            },
            subject:{
                label: 'Subject',
                placeholder: 'Your subject ...',
                validationText: 'Subject is required',
                required: "true"
            }
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

export default en

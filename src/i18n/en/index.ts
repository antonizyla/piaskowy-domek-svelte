import type {BaseTranslation} from '../i18n-types'

const en: BaseTranslation = {
    nav: {
        heading: 'Piaskowy Domek Łeba',
        links: [
            {label: 'Gallery', href: '/'},
            {label: 'About', href: '/'},
            {label: 'FAQ', href: '/'},
            {label: 'Rooms', href: '/'}
        ],
        cta: {label: 'Contact', href: '/'},
        accessibility: {
            arialabel: 'Primary',
            id: 'Primary Navigation'
        }
    },
    splash: {
        mainHeading: "Piaskowy Domek Łeba",
        subtext: "blah blah blah blah description .....",
        cta: "Find out More"
    },
    privacy: {
        heading: "How we use data",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet beatae consectetur, delectus dolore eaque earum magnam minus nihil officia placeat possimus quaerat quod rem sunt tenetur voluptatem. Maiores.",
        changeButton: "Change Cookie Settings"
    },
    accordion: {
        accessibility: {a: "a"},
        items: [
            {id: "1", title: "Item 1", content: "Content 1", open: "true"},
            {id: "2", title: "Item 2", content: "Content 2", open: "false"},
            {id: "3", title: "Item 3", content: "Content 3", open: "false"},
            {id: "4", title: "Item 4", content: "Content 4", open: "false"},
        ],
    },
    contactForm: {
        fields: {
            email: {
                label: 'Email',
                placeholder: 'yourname@gmail.com',
                validationText: 'Email is required',
                required: "true"
            },
            message: {
                label: 'Message',
                placeholder: 'Your message ...',
                validationText: 'Message of at least 20 chars is required',
                required: "true"
            },
            name: {
                label: 'Name',
                placeholder: 'John Smith',
                validationText: 'Name is required',
                required: "true"
            },
            subject: {
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


import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = ({ locals: { LL } }) => {
    //console.info(LL.log({ fileName: '+page.server.ts' }))
}

export const actions = {
    contact: async () => {
        console.log("contact form has been submitted")
    },
} 

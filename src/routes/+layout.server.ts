import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ locals: { locale }, request}) => {
	//console.info(LL.log({ fileName: '+layout.server.ts' }))

	// log if user has DNT enabled in request
	// pass locale information from "server-context" to "shared server + client context"
	return { locale }
}
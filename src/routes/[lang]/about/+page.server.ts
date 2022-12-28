import type {Actions} from './$types';

export const actions: Actions = {
    contact: async ({request}) => {
        const data = await request.formData();
        console.log(data);
        return true;
    }
}




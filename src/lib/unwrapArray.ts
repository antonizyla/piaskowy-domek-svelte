
// takes in a localised string dictionary and converts into an array of objects for use
// in svelte iteration
export function unwrapArray(input: any) {
    const array: any = [];
    Object.keys(input).forEach((key) => {
        array.push(input[key]);
    })
    return array;
}

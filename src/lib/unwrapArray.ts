export function unwrapArray(input: any) {
    const array: any = [];
    Object.keys(input).forEach((key) => {
        array.push(input[key]);
    })
    return array;
}
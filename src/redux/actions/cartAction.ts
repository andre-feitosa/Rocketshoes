export function addToCart(a: any) {
    return {
        type: 'addToCart',
        payload: [a]
    }
}

export function removeToCart(a: any) {
    return {
        type: 'removeToCart',
        payload: [a]
    }
}

export function updateAmount(a: any) {
    return {
        type: 'updateAmount',
        payload: [a]
    }
}
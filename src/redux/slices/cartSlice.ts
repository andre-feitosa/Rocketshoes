import produce from 'immer'

export function cartSlice(state: any = [], {payload, type}: any )  {
    switch (type) {
        case 'addToCart':
            const reducerAdd = state
                .map((elem: any)=>JSON.stringify(elem))
                .reduce((acc: any, cur: any) => (acc.includes(cur) || acc.push(cur), acc), [])
                .map((e: any) => JSON.parse(e));

            const indexAdd = reducerAdd.findIndex((val: any) => JSON.stringify(val.payload) === JSON.stringify(payload))

            if(indexAdd < 0) {
                return [...state, {payload, amount: 1}]
            };
        case 'removeToCart':

            const indexRemove = state.findIndex((val: any) => JSON.stringify(val.payload[0].product) === JSON.stringify(payload[0].product.payload[0].product))

            state.splice(indexRemove, 1)

            return [...state]
        case 'updateAmount':
            var indexUpdate = state.findIndex((val: any) => JSON.stringify(val.payload[0].product) === JSON.stringify(payload[0].product.payload[0].product))

            if(state[indexUpdate].amount >= 1) {
                state[indexUpdate].amount = payload[0].amount
            }
            if(state[indexUpdate].amount <= 0) {
                state[indexUpdate].amount = 1
            }
            
            return [...state]
        default:
            return state;
    }
}
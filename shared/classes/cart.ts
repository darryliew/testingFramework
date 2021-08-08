import {CartObject} from '../data/table-data'

export class Cart {
    public items: [{
        id: string
        unitPrice: number
        quantity: number
    }]

    constructor(cartObj: CartObject) {
        this.items = [{
            id: cartObj.id,
            unitPrice: cartObj.unitPrice,
            quantity: cartObj.quantity,
        }]
    }
}

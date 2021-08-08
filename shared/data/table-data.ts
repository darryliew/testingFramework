export interface CartObject {
    items?: CartObject[]
}

export interface CartObject {
    id?: string
    unitPrice?: number
    quantity?: number
}

export interface ResponseErrorObject {
    code?: string
    title?: string
}
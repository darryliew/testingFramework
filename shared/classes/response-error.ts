import {ResponseErrorObject} from '../data/table-data'

export class ResponseError {
    public code: string
    public title: string

    constructor(errObj: ResponseErrorObject) {
        this.code = errObj.code
        this.title = errObj.title
    }
}

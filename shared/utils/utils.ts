import {expect} from "chai";
import {LOG_LEVEL} from '../config'
import {api} from './index'

const winston = require('winston')

const logFormat = winston.format.printf(function (log) {
    return JSON.stringify(log.message, null, ' ')
})

export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: LOG_LEVEL,
            format: logFormat,
        }),
    ],
})

export const verifyResponseStatus = (status: number): void => {
    if (api.response.status !== status) {
        if (api.response.data && api.response.data.errors) {
            expect(api.response.status).to.equal(status, JSON.stringify(api.response.data.errors[0]))
        } else {
            expect(api.response.status).to.equal(status, 'Status code is not as expected')
        }
    }
}

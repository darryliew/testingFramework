import axios, {AxiosRequestConfig} from 'axios'
import {expect} from 'chai'
import {LOCALHOST_URL} from '../config'
import {logger, verifyResponseStatus} from '../utils/utils'

export class Api {
    public response: any
    public errorData: any
    public error: object

    private axiosInstance = axios.create({
        baseURL: LOCALHOST_URL,
    })

    post = async (path: string, requestObject: object, config: AxiosRequestConfig, verifyStatus = true, status = 201): Promise<object> => {
        this.logRequest(requestObject, config)
        try {
            this.response = await this.axiosInstance.post(path, requestObject, config)
            this.logResponse()
            if (verifyStatus) verifyResponseStatus(status)
            return this.response
        } catch (error) {
            this.logError(error)
        }
    }

    get = async (path: string, config: AxiosRequestConfig, verifyStatus = true, status = 200): Promise<object> => {
        this.logRequest({}, config)
        try {
            this.response = await this.axiosInstance.get(path, config)
            this.logResponse()
            if (verifyStatus) verifyResponseStatus(status)
            return this.response.data
        } catch (error) {
            this.logError(error)
        }
    }

    logResponse = (): void => {
        logger.debug(this.response.config)
        logger.debug('status code: ' + this.response.status)
        logger.debug('status text: ' + this.response.statusText)
        logger.debug(this.response.data)
    }

    logRequest = (request, config): void => {
        logger.debug(request)
        logger.debug(config)
    }

    logError = (error: object): void => {
        this.error = error
        const errorObjStr = JSON.stringify(error)

        if ('error' in error) {
            this.errorData = error['response'].data
        } else {
            throw error
        }
        logger.error(errorObjStr)
        logger.error(this.errorData)
        expect.fail(JSON.stringify(this.errorData))
    }
}

export const api = new Api()

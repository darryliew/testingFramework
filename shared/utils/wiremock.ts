import {LOCALHOST_URL} from '../config'
import axios from "axios";

const createWiremockStub = (url: string, method: string, status: number) => (
    {
        "request": {
            url,
            method
        },
        "response": {
            status
        }
    }
);

const createWiremockStubWithBody = (url: string, method: string, status: number, body: object) => (
    {
        ...createWiremockStub(url, method, status),
        "response": {
            status,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        }
    }
);

export const mockApiCall = async (path: string, method: string, status: number, response?: object) => {
    const stub = response ? createWiremockStubWithBody(path, method, status, response) : createWiremockStub(path, method, status)
    await axios.post(`${LOCALHOST_URL}/__admin/mappings/new`, stub)
}

export const resetMocks = async () => {
    await axios.post(`${LOCALHOST_URL}/__admin/mappings/reset`)
}
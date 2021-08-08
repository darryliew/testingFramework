import {Given} from "cucumber";
import {mockApiCall} from "../shared/utils/wiremock";

Given('I create a wiremock stub for the cart', async function () {
    let mockedResponse = {
        items: [{
            id: "civ6",
            unitPrice: 100,
            quantity: 1
        }]
    }

    await mockApiCall('/cart', "POST", 201, mockedResponse)
})

Given('I read a wiremock stub for the cart', async function () {
    let mockedResponse = {
        items: [{
            id: "civ6",
            unitPrice: 100,
            quantity: 1

        }],
        totalPrice: 100
    }

    await mockApiCall('/cart', "GET", 200, mockedResponse)
})
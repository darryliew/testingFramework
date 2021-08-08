import {TableDefinition, When} from "cucumber";
import {api} from "../shared/utils";
import {CART} from "../shared/config";
import {Cart} from "../shared/classes/cart";
import {expect} from "chai";

When('I add a items to my cart', async function (table: TableDefinition) {
    for (const hash of table.hashes()) {
        await api.post(CART, new Cart(hash), this.headers)
    }
})

When('I view my cart and verify the data is correct', async function (table: TableDefinition) {
    await api.get(CART, this.headers)

    const rows = table.raw();
    const entries = Object.entries(api.response['data'].items[0]);
    let i = 0
    for (const [responseKey, responseValue] of entries) {
        const row = rows[i];
        expect(responseKey).to.be.equals(row[0]);
        parseInt(row[1]) ? expect(parseInt(row[1])).to.be.equals(responseValue) : expect(row[1]).to.be.equals(responseValue);
        i++;
    }
})

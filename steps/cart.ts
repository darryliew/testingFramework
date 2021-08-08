import {When,TableDefinition} from "cucumber";
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

    const rows = table.hashes()
    for (const row of rows) {
        expect(api.response['data'].items[row[0]]).to.be.equals(row[1])
    }
})

import {BeforeAll} from 'cucumber'
import {resetMocks} from "./wiremock";
import {RESET_DATA_BEFORE_ALL} from "../config";

BeforeAll(async () => {
    if (RESET_DATA_BEFORE_ALL) {
        await resetMocks()
    }
});
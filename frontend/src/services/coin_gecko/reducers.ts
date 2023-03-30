
import { ReduxAction } from "../../types";
import { GET_COIN_GECKO_DATA, GET_COIN_GECKO_COINS } from "./constants";

const INIT_STATE = {
    coins: [],
    data: [],
}

const CoinGeckoReducer = (state=INIT_STATE, action: ReduxAction) => {
    switch(action.type) {
        case GET_COIN_GECKO_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case GET_COIN_GECKO_COINS:
            return {
                ...state,
                coins: action.payload,
            }
        default:
            return state;
    }
}

export default CoinGeckoReducer;
import { combineReducers } from "redux";

import CoinGeckoReducer from "./coin_gecko/reducers";
import CoinMarketCapReducer from "./coin_market_cap/reducers";


export default combineReducers({
    CoinGecko: CoinGeckoReducer,
    CoinMarketCap: CoinMarketCapReducer,
})
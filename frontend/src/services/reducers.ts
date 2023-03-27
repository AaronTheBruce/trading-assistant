import { combineReducers } from "redux";

import CoinGeckoReducer from "./CoinGecko/reducers";
import CoinMarketCapReducer from "./CoinMarketCap/reducers";


export default combineReducers({
    CoinGecko: CoinGeckoReducer,
    CoinMarketCap: CoinMarketCapReducer,
})
import axios from "axios";
import { Store } from "redux";
import { CoinGeckoParams } from "../types";
import { getCoinGeckoData } from "../services/actions";

export const fetchCoinGeckoData = async (store: Store, params:CoinGeckoParams={
    vs_currency:'usd',
    order:"market_cap_desc", // market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc
    per_page:100,
    page:1,
    sparkline:false,
    locale:"en"
}) => {
    try {
        const {
            vs_currency,
            order,
            per_page,
            page,
            sparkline,
            locale
        } = params;
        const res : Array<any> = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&order=${order}&per_page=${per_page}&page=${page}&sparkline=${sparkline}&locale=${locale}`)
        store.dispatch(getCoinGeckoData(res));
        return {
            status: false,
            message: "Successfully got coins"
        }
    } catch(err) {
        return {
            status: false,
            message: err,
        }
    }
}
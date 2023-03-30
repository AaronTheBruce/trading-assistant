import axios from "axios";
import { Store } from "redux";
import { getCoinGeckoCoins } from "../services/actions";

/**
 * 
 * @param store
 * @returns an object with status or message
 */
export const fetchCoinGeckoCoinList = async (store: Store) => {
    try {
        const res : Array<any> = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true');
        store.dispatch(getCoinGeckoCoins(res));
        return {
            status: true,
            message: 'Coin Gecko Coins have been fetched!'
        }
    } catch(err) {
        return {
            status: false,
            message: err
        }
    }
}
import axios from "axios"

export const getCoinGeckoCoins = async () => {
    const res = axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true');
}
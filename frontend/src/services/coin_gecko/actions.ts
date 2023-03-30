import { GET_COIN_GECKO_COINS, GET_COIN_GECKO_DATA } from "./constants";

export const getCoinGeckoData = (data: Array<any>) => ({
    type: GET_COIN_GECKO_DATA,
    payload: data,
});

export const getCoinGeckoCoins = (coins: Array<any>) => ({
    type: GET_COIN_GECKO_COINS,
    payload: coins
});

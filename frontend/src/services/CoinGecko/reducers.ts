
import { Action } from "redux";

const INIT_STATE = {

}

const CoinGeckoReducer = (state=INIT_STATE, action: Action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default CoinGeckoReducer;
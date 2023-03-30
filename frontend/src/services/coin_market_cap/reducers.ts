
import { Action } from "redux";

const INIT_STATE = {

}

const CoinMarketCapReducer = (state=INIT_STATE, action: Action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default CoinMarketCapReducer;
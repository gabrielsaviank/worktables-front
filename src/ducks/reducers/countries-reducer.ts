
import {
    FETCH_COUNTRIES
} from "../actions/types";

export default (state= [], action: any) => {
    switch (action.type) {
        case FETCH_COUNTRIES:
            return action.payload;
        default:
            return state;
    }
};
import * as actionTypes from "../actions/actionTypes.js"
import initialState from "./initialState.js";

export default function changeCategoryReducer(state = initialState.currentCategory, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload

        default:
            return state;
    }
}
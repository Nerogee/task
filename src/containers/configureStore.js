import { createStore, combineReducers } from 'redux';
import appReducer from './App/redux';
import searchReducer from './Search/redux';
import ListingReducer from './Listing/redux';
import recommendationReducer from './Recommendation/redux';

const rootReducer = combineReducers({
    app: appReducer,
    search: searchReducer,
    listing: ListingReducer,
    recommendation: recommendationReducer,
})

export default function configureStore(initialState) {
    return createStore(rootReducer);
}
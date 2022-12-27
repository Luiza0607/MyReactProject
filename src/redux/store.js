import { legacy_createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { listsReducer } from './listsReducer';
import { columnsReducer } from './columnsReducer';
import { cardsReducer } from './cardsReducer';
import { searchStringTitleReducer } from './searchStringTitleReducer';

const subreducers = {
	lists: listsReducer,
	columns: columnsReducer,
	cards: cardsReducer,
	searchStringTitle: searchStringTitleReducer,
};

const reducer = combineReducers(subreducers);

const store = legacy_createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
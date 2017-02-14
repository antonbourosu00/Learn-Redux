import { createStore, compse} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer

import rootReducer from './reducers/index';

import posts from './data/comments';
import comments from './data/posts';

// create an object for the default data

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store; // use as parameter to route Provider
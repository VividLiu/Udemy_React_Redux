import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ReduxPromise from "redux-promise";

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostDetail from './components/post_detail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<Switch>
    		<Route path="/posts/new" component={PostsNew} />
    		<Route path="/posts/:id" component={PostDetail} />
    		<Route path="/" component={PostsIndex} />
    	</Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

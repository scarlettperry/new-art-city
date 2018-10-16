import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

//for routers
import Homepage from './components/Homepage'
import UserProfile from './components/UserProfile'
import {BrowserRouter as Router, Route, IndexRoute, browserHistory} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import {syncHistoryWithStore, routerReducer } from 'react-router-redux'

//redux
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'

const store = createStore(combineReducers({
    reducer,
    routing: routerReducer
  }), applyMiddleware(thunk))

const history = syncHistoryWithStore(createBrowserHistory(), store)

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}></Route>
      <Route path="/home" component={Homepage}></Route>
      <Route path="/profile" component={UserProfile}></Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root'));

serviceWorker.unregister();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Routes from './main/routes'
import reducers from './main/reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('app'))
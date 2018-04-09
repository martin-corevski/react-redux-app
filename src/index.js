import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.scss'
import App from './containers/App'
import reducer from './store/reducer'

// Set up axios default configuration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// https://github.com/axios/axios#interceptors
axios.interceptors.request.use(request => {
  console.log('axios interceptors request: ', request)
  // Edit request config
  return request
}, error => {
  // request error handling, like loss of internet connection, server problems..
  console.log('axios interceptors error: ', error)
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  console.log('axios interceptors response: ', response)
  // Edit response config
  return response
}, error => {
  // request error handling, like loss of internet connection, server problems..
  console.log('axios interceptors error: ', error)
  return Promise.reject(error)
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))

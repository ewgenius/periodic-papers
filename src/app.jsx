import React from 'react'
import {render} from 'react-dom'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import {showAlert} from './actions'
import configure from  'react-tap-event-plugin'
import PouchDB from 'pouchdb'
import firebase from 'firebase'
import './styles/main.scss'

window.PouchDB = PouchDB

import App from './components/App/App.jsx'

const theme = getMuiTheme({
  palette: {
    primary1Color: '#2e3542',
    primary2Color: '#2e3542',
    primary3Color: '#2e3542',
    //accent1Color: '#fff',
    //accent2Color: '#fff',
    //accent3Color: '#fff',
    textColor: '#fff',
    alternateTextColor: '#fff',
    canvasColor: '#3a4354',
  },
  appBar: {
    height: 56
  },
  snackbar: {
    backgroundColor: 'rgba(0, 0, 0, 0.870588)'
  }
})

configure()

const root = document.getElementById('root')
const store = createStore(reducer)

const db = new PouchDB('elements')
db.info().then(info => {
  //console.log(info)
  /*db.put({
    _id: '0',
    name: 'test'
  })*/
})


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIF7cC7wF-KwXeQPj3U9l-ohCP45FBEY8",
  authDomain: "periodic-papers.firebaseapp.com",
  databaseURL: "https://periodic-papers.firebaseio.com",
  storageBucket: "periodic-papers.appspot.com",
})

console.log(firebaseApp.database())

function updateReady(worker) {
  store.dispatch(showAlert('New version is ready', 'reload', () => {
    worker.postMessage({ action: 'skipWaiting' })
  }))
}

function trackInstalling(worker) {
  worker.addEventListener('statechange', () => {
    updateReady(worker)
  })
}

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => {
      if (!navigator.serviceWorker.controller) {
        return
      }

      if (reg.waiting) {
        updateReady(reg.waiting)
        return
      }

      if (reg.installing) {
        trackInstalling(reg.installing)
        return
      }

      reg.addEventListener('updatefound', () => {
        trackInstalling(reg.installing)
      })
    })

  let refreshing = false
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return
    window.location.reload()
    refreshing = true
  })
}

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <App/>
    </MuiThemeProvider>
  </Provider>, root)
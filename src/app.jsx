import React from 'react'
import {render} from 'react-dom'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import configure from  'react-tap-event-plugin'
import './styles/main.scss'

import App from './components/App/App.jsx'

const theme = getMuiTheme({
  palette: {
    primary1Color: '#2e3542',
    primary2Color: '#2e3542',
    primary3Color: '#2e3542',
    accent1Color: '#fff',
    accent2Color: '#fff',
    accent3Color: '#fff',
    textColor: '#fff',
    alternateTextColor: '#fff',
    canvasColor: '#3a4354'
  },
  appBar: {
    height: 56
  }
})

configure()
const root = document.getElementById('root')

render(<MuiThemeProvider muiTheme={theme}>
  <App/>
</MuiThemeProvider>, root)
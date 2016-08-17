import React from 'react'
import {render} from 'react-dom'
import configure from  'react-tap-event-plugin'
import './styles/main.scss'

import App from './components/App/App.jsx'

configure()
const root = document.getElementById('root')

render(<App/>, root)
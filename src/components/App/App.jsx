import React, {Component} from 'react'
import {AppBar} from 'material-ui'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'

const theme = getMuiTheme()

export default class App extends Component {
  render() {
    return <MuiThemeProvider muiTheme={theme}>
      <div className='app layout column'>
        <AppBar style={{
          height: 56
        }}
          title='periodic papers'/>
      </div>
    </MuiThemeProvider>
  }
}
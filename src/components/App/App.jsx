import React, {Component} from 'react'
import './App.scss'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ScrollView from '../ScrollView/ScrollView.jsx'

export default class App extends Component {
  render() {
    return <div className='app layout column'>
      <AppBar
        showMenuIconButton={false}
        title='Periodic papers'
        titleStyle={{ fontSize: 20 }}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="About" />
          </IconMenu>
        }
        />
      <ScrollView>
        <div style={{ width: 1000, height: 1000 }}/>
      </ScrollView>
    </div>
  }
}
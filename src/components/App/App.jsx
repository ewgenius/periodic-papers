import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import './App.scss'

import {showAlert, hideAlert} from '../../actions'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Snackbar from 'material-ui/Snackbar'
import ScrollView from '../ScrollView/ScrollView.jsx'

const mapProps = state => ({
  showAlert: state.showAlert,
  alertMessage: state.alertMessage,
  alertAction: state.alertAction,
  alertActionHandler: state.alertActionHandler
})

class App extends Component {
  static propTypes = {
    showAlert: PropTypes.bool.isRequired,
    alertMessage: PropTypes.string,
    alertAction: PropTypes.string,
    alertActionHandler: PropTypes.func,
    
    dispatch: PropTypes.func.isRequired
  }

  hideNotification() {
    this.props.dispatch(hideAlert())
  }

  reloadApp() {
    location.reload()
  }

  render() {
    const {showAlert} = this.props

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
            <MenuItem primaryText="Refresh" onTouchTap={this.reloadApp}/>
          </IconMenu>
        }
        />

      <ScrollView>
        <div style={{ width: 1000, height: 1000 }}/>
      </ScrollView>

      <Snackbar
        open={showAlert}
        message={this.props.alertMessage}
        autoHideDuration={4000}
        action={this.props.alertAction}
        onActionTouchTap={() => this.props.alertActionHandler()}
        onRequestClose={() => this.hideNotification()}/>
    </div>
  }
}

export default connect(mapProps)(App)
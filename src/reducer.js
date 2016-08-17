import {
  SHOW_ALERT,
  HIDE_ALERT
} from './actions'

const initial = {
  showAlert: false,
  alertMessage: 'test',
  alertAction: 'action',
  alertActionHandler: () => {}
}

export default (state = initial, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertMessage: action.message || state.alertMessage,
        alertAction: action.action || state.alertAction,
        alertActionHandler: action.handler || state.alertActionHandler
      }
    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false
      }
    default:
      return state
  }
}
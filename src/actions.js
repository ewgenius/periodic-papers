export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

export const showAlert = (message, action, handler) => ({
  type: SHOW_ALERT,
  message,
  action,
  handler
})

export const hideAlert = () => ({
  type: HIDE_ALERT
})
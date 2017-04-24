import AppDispatcher from '../dispatcher/app-dispatcher'

// This action creator sends the type of action and the params (if any) to the dispatcher
export default {

  addConcepto (data) {
    AppDispatcher.handleAction({
      actionType: 'ADD',
      data: data
    })
  },

  removeConcepto (data) {
    AppDispatcher.handleAction({
      actionType: 'REMOVE',
      data: data
    })
  },

  resetAll () {
    AppDispatcher.handleAction({
      actionType: 'RESET'
    })
  },

  printAll () {
    AppDispatcher.handleAction({
      actionType: 'PRINT'
    })
  }
}

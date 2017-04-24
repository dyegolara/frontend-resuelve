/*

This is an alternative scalable store
I made it so I can have it for future bigger projects.  //(and for fun, you know)

In this case if you substitute the path on table.jsx for the name of
this file, it will work exactly the same.

*/
import {EventEmitter} from 'events'
import _ from 'lodash'

import AppDispatcher from '../dispatcher/app-dispatcher'

class Store extends EventEmitter {
  constructor () {
    super()
    this.registeredActions = {}
    this.error = null
  }

  emitChange () {
    this.emit('change')
  };

  addChangeListener (callback) {
    this.on('change', callback)
  };

  removeChangeListener (callback) {
    this.removeListener('change', callback)
  };

  static getInstance () {
    let ClassName = this
    this.instance = new ClassName()
    this.instance.registerAll()

    return this.instance
  };

  // Register all actions to Dispatcher
  registerAll () {
    let actions = _.keys(this.actions)

    actions.forEach((key) => {
      let action = this.actions[key]

      // Keep the reference action each action handler
      this.registeredActions[key] = AppDispatcher.register((payload) => {
        let data = payload.action
        let actionType = data.actionType

        if (actionType !== key) {
          return true
        }

        // Invoke callback and emit change in the store only when the keys match
        let triggerChange = action.call(this, data)

        // Allow the callback to return false to avoid triggering change event
        if (triggerChange !== false) {
          this.emitChange()
        }

        return true
      })
    })
  };
}

class TableStore extends Store {
  constructor () {
    super()
    this.conceptos = []

    this.actions = {

      ADD: (action) => {
        this.setConcepto(action.data)
      },
      REMOVE: (action) => {
        this.removeConcepto(action.data)
      },
      RESET: () => {
        this.reset()
      },
      PRINT: () => {
        this.printToConsole()
      }
    }
  };

  getConceptos () {
    return this.conceptos
  };

  setConcepto (concepto) {
    this.conceptos.push(concepto)
  };

  removeConcepto (id) {
    _.pullAllBy(this.conceptos, [{'id': id}], 'id')
  };

  reset () {
    this.conceptos = []
  };

  printToConsole () {
    console.log(this.conceptos)
  };
}

export default TableStore.getInstance()

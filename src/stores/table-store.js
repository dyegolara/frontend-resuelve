import {EventEmitter} from 'events';
import _ from 'lodash';

import AppDispatcher from '../dispatcher/app-dispatcher';

class Store extends EventEmitter {

	constructor() {
		super();
		this.conceptos = []; //This is the default data when the app inits
	};

	emitChange() {
		this.emit('change');
	};

	addChangeListener(callback) {
		this.on('change', callback);
	};

	removeChangeListener(callback) {
		this.removeListener('change', callback);
	};

	getConceptos() {
		return this.conceptos;
	};

	setConcepto(concepto) {
		this.conceptos.push(concepto)
	};

	removeConcepto(id) {

		// Iterates over conceptos array and looks for the passed id among the objects
		// then deletes that entry
		_.pullAllBy(this.conceptos, [{'id' : id}], 'id');
	};

	reset() {
		this.conceptos = [];
	};

	printToConsole() {
		// Me hubiera gustado saber si habia un formato es especifico para imprimir los datos
		console.log(this.conceptos);
	};
}

let TableStore = new Store();

// When the Dispatcher dispatchs an action, this function looks what type was it
// depending the type, it calls the store function
// then emits a 'change' so the component can listen
AppDispatcher.register(function (payload) {

	let action = payload.action;

	switch (action.actionType) {
		case 'ADD' :
			TableStore.setConcepto(action.data);
			break;
		case 'REMOVE' :
			TableStore.removeConcepto(action.data);
			break;
		case 'RESET' :
			TableStore.reset();
			break;
		case 'PRINT' :
			TableStore.printToConsole();
			break;
		default :
			break;
	}

	TableStore.emitChange();
	return true;
});

export default TableStore;

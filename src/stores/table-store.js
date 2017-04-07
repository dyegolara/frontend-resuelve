import {EventEmitter} from 'events';
import _ from 'lodash';

import AppDispatcher from '../dispatcher/app-dispatcher';

class Store extends EventEmitter {

	constructor() {
		super();
		this.conceptos = [];
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
		_.pullAllBy(this.conceptos, [{'id' : id}], 'id');
	};

	reset() {
		this.conceptos = [];
	};

	printToConsole() {
		console.log(this.conceptos);
	};
}

let TableStore = new Store();

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

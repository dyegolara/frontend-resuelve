import {EventEmitter} from 'events';
import _ from 'lodash';

import AppDispatcher from '../dispatcher/app-dispatcher';

class TableStore extends EventEmitter {

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

let tableStore = new TableStore();

AppDispatcher.register(function (payload) {

	let action = payload.action;

	switch (action.actionType) {
		case 'ADD' :
			tableStore.setConcepto(action.data);
			break;
		case 'REMOVE' :
			tableStore.removeConcepto(action.data);
			break;
		case 'RESET' :
			tableStore.reset();
			break;
		case 'PRINT' :
			tableStore.printToConsole();
			break;
		default :
			break;
	}

	tableStore.emitChange();
	return true;
});

export default tableStore;

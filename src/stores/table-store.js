import {EventEmitter} from 'events';

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

	getConceptos(){
		return this.conceptos;
	}

	setConceptos(concepto){
		this.conceptos.push(concepto)
	}
}

let tableStore = new TableStore();

AppDispatcher.register(function (payload) {

	let action = payload.action;

	switch (action.actionType) {
		case 'ADD' :
			tableStore.setConceptos(action.data);
			break;
		case 'REMOVE' :
			break;
		case 'RESET' :
			break;
		case 'PRINT' :
			break;
		default : break;
	}

	tableStore.emitChange();
	return true;
});

export default tableStore;

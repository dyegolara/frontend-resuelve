import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/app-dispatcher';

class TableStore extends EventEmitter {

	emitChange(){
		this.emit('change');
	}

	addChangeListener(callback){
		this.on('change', callback);
	}
}

AppDispatcher.register(function(payload){
	console.log(payload);
	AppStore.emitChange();
	return true;
});

export default TableStore

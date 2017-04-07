import AppDispatcher from '../dispatcher/app-dispatcher';

export default {

	addConcepto(data){

		AppDispatcher.handleAction({
			actionType: 'ADD',
			data: data
		});
	},

	removeConcepto(data){

		AppDispatcher.handleAction({
			actionType: 'REMOVE',
			data: data
		});
	},

	resetAll(data){

		AppDispatcher.handleAction({
			actionType: 'RESET',
			data: data
		});
	},

	printAll(data){

		AppDispatcher.handleAction({
			actionType: 'PRINT',
			data: data
		});
	}
}
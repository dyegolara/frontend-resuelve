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
	}
}
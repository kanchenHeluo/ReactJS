import AppDispatcher from '../Dispatcher/AppDispatcher';

var AppActions = {
	update: function(n){
		AppDispatcher.dispatch({
			actionType: 'UPDATE',
			n: n
		});
	}
}

module.exports = AppActions;
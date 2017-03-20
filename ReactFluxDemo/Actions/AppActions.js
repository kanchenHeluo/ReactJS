import AppDispatcher from '../Dispatcher/AppDispatcher';

var AppActions = {
	addNewItem(n){
		AppDispatcher.dispatch({
			actionType: 'Add_New_Item',
			text: n
		});
	}
}

module.exports = AppActions;
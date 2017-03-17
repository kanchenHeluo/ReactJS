import flux from 'flux';
import AppStore from '../Stores/AppStore'


var AppDispatcher = new flux.Dispatcher();
module.exports = AppDispatcher;

AppDispatcher.register(function(action){
	switch(action.actionType){
		case 'Add_New_Item':
			AppStore.addNewItem(action.text);
			AppStore.emitChange();
			break;
		default:
		//nothing
	}
})
import AppDispatcher from '../Dispatcher/AppDispatcher';
import events from 'events';
import assign from 'object-assign'; 

var CHANGE_EVENT = 'change';


var AppStore = assign({}, events.EventEmitter.prototype, {
	name : '',
	updateName: function(n){
		name = 'u_' + n;
	},
	getName: function(){
		return name; 
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	}

});

AppDispatcher.register(function(action){
	switch(action.actionType){
		case 'UPDATE':
			AppStore.updateName(action.n.trim());
			AppStore.emitChange();
			break;
	}

})

module.exports = AppStore;


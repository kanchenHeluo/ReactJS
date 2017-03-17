import events from 'events';
import assign from 'object-assign'; 

let CHANGE_EVENT = 'change';


var AppStore = assign({}, events.EventEmitter.prototype, {
	items: [],
	getAll(){
		return this.items;
	},
	addNewItem(text){
		this.items.push(text);
	},
	emitChange(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}

});

module.exports = AppStore;


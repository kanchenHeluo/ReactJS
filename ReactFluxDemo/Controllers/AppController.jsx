import React from 'react';
import App from '../Components/App.jsx';
import AppActions from '../Actions/AppActions';
import AppStore from '../Stores/AppStore';

class AppController extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
	}

	//Mounting LifeCycle
	componentDidMount(){
		AppStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount(){
		AppStore.removeChangeListener(this._onChange.bind(this));
	}

	_onChange(){
		this.setState({items: AppStore.getAll()});
	}

	createNewItem(e){
		AppActions.addNewItem('new item');
	}

	render(){
		return(
			<div>
				<h1>This Is App Controller</h1>
				<App onClick={this.createNewItem} data={this.state.items}/>
			</div>
			);
	}
}

module.exports = AppController;
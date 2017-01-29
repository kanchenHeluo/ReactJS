import React from 'react';
import styles from './Navigator.css';
import classNames from 'classnames';

import appStore from '../Stores/AppStore';
import appAction from '../Actions/AppAction';

class Navigator extends React.Component {
	constructor(props){
		super(props);
		this.state = {disabled: false, name: 'test'};
	}
	setInputVal(event){
			console.log(event.target.value);
			appAction.update(event.target.value);
	}
	componentDidMount(){
		appStore.addChangeListener(this._onChange.bind(this));
	}
	//componentWillUnmount: function(){
		//appStore.removeChangeListener(this._onChange);
	//}
	_onChange(){
		console.log('change is triggered');
		this.setState({name: appStore.getName()});
	}

	render(){
		let cx = classNames({
			[styles.confirm]: !this.state.disabled,
			[styles.disabledConfirm]: this.state.disabled
		});
		return (
			<div>
				<div className={styles.offTab}>
					test
					<a className={cx}>FiveChessTab</a>
				</div>
				<div className='testglobal'>
					val: <p>{name}</p>
					<br/>
					<input type='text' value={name} onChange={this.setInputVal.bind(this)}/>
				</div>
			</div>
		);
	}
}

export default Navigator;
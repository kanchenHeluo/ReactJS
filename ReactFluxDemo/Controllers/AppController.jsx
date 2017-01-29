import React from 'react';

import Navigator from '../Components/Navigator.jsx';

import styles from '../styles/app.css'

var AppController = React.createClass({
	render: function(){
		return(
			<div>
				<h1 className='title'>This is Title</h1>
				<Navigator />
			</div>
			);
	}
});

module.exports = AppController;
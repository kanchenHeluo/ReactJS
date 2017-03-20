import React from 'react';

class App extends React.Component {
	constructor(props){
		super(props);
	}
	render(){	
		var itemsContent = <ul>{this.props.data? this.props.data.map((a, i)=>{return <li key={i}>a</li>}) : <li></li>}</ul>	;
		return (
			<div>
				<input type='button' value='New Item' onClick={this.props.onClick} />
				{itemsContent}
			</div>
		);
	}
}

export default App;
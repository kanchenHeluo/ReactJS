import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './component/Pagination.jsx';
import styles from './styles/app.css'

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			debuginfo: 'this is a pagination demo',
			fileList: [],
			pageSize: 3,
			pageCount: 12

		}
	}

	getFileList(pageIdx){
		//fake, actually need call api to get filelist and update pagecount
		var fl = new Array();
		for(var i=0; i<this.state.pageSize; i++){
			fl[i] = (pageIdx-1)*this.state.pageSize + i+1;
		}
		this.setState({fileList: fl});		
	}

	reLoadFileList(){		
      	if (this.refs.pagination !== undefined) {
        	this.refs.pagination.initCurrentPage(1);
      	}
      	//fake, actually need call api to get filelist and update pagecount
      	getFileList(1);
	}

	renderFileList(){
		return <ul>{this.state.fileList.map((f,i)=> {return <li>{f}</li>;})}</ul>;
	}

	render(){
		return (
			<div>
				<div className='title'>{this.state.debuginfo}</div>
				<input type='button' value='reload' onClick={this.reLoadFileList.bind(this)}/>
				{this.renderFileList.bind(this)}
				<Pagination ref='pagination' pageSize={this.state.pageSize} pageCount={this.state.pageCount} onPageChange={this.getFileList.bind(this)}/>
			</div>
		);
	}
}

export default App;
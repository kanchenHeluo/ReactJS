import React from 'react'
import styles from './Pagination.css'

class Pagination extends React.Component {
  //required validation

  //default value
  static defaultProps = {
    pageCount: 1,
    pageSize : 5,
    breakLabel: "...",
    pageRangeDisplayed: 3,
    disabledClassName: 'disabled'
  }

  constructor (props) {
    super(props);
    this.state = {
      currentPage: 1
    }
  }

  initCurrentPage(i){
    this.setState({currentPage: i});
  }

  pageUp(){
    if(this.state.currentPage > 1){
      this.switchPage(this.state.currentPage-1);
    }
  }
  pageDown(){
    if(this.state.currentPage < this.props.pageCount){
      this.switchPage(this.state.currentPage+1);
    }
  }
  
  pageGo(e){
    var i = parseInt(e.target.innerText);    
    this.switchPage(i);
  }

  switchPage(i){     
    if(typeof(this.props.onPageChange) === "function"){
      this.setState({currentPage: i}, function(){
        this.props.onPageChange(this.state.currentPage, this.props.pageSize);
      })
    }
  }

  getActiveClassName(idx){
    return idx == this.state.currentPage ? styles.active : '';
  }

  extendLeftRange(){
    this.setState({currentPage: this.state.currentPage-this.props.pageRangeDisplayed});
  }

  extendRightRange(){
    this.setState({currentPage: this.state.currentPage+this.props.pageRangeDisplayed});
  }

  renderPages(){   
    var arr = new Array();
    for(var i=0; i<this.props.pageCount; i++){
      arr[i] = i+1;
    }

    var leftBlock, midBlock, rightBlock;
    var leftRange, rightRange;
    if(this.state.currentPage - Math.ceil(this.props.pageRangeDisplayed/2) <= this.props.pageRangeDisplayed){
      var maxIdx = this.state.currentPage+1 > this.props.pageRangeDisplayed ? this.state.currentPage+1 : this.props.pageRangeDisplayed;
      maxIdx = maxIdx > this.props.pageCount ? this.props.pageCount : maxIdx;
      leftBlock = arr.filter(a => a<=maxIdx).map((a,i) => { return <a key={i} className={this.getActiveClassName(a)} onClick={this.pageGo.bind(this)}>{a}</a>});
      if(this.props.pageCount > maxIdx){      
        rightRange = <a onClick={this.extendRightRange.bind(this)}>{this.props.breakLabel}</a>;
        rightBlock = <a onClick={this.pageGo.bind(this)}>{this.props.pageCount}</a>;
      }
    }else if(this.state.currentPage + Math.ceil(this.props.pageRangeDisplayed/2) >= this.props.pageCount - this.props.pageRangeDisplayed + 1){
      leftBlock = <a onClick={this.pageGo.bind(this)}>1</a>;
      leftRange = <a onClick={this.extendLeftRange.bind(this)}>{this.props.breakLabel}</a>;

      var minIdx = this.state.currentPage-1 < this.props.pageCount - this.props.pageRangeDisplayed + 1 ? this.state.currentPage-1 : this.props.pageCount - this.props.pageRangeDisplayed + 1;
      rightBlock = arr.filter(a => a>=minIdx).map((a,i) => { return <a key={i} className={this.getActiveClassName(a)} onClick={this.pageGo.bind(this)}>{a}</a>});
    }else{
      leftBlock = <a onClick={this.pageGo.bind(this)}>1</a>;
      leftRange = <a onClick={this.extendLeftRange.bind(this)}>{this.props.breakLabel}</a>;
      midBlock = arr.filter(a => a>=this.state.currentPage-1 && a<=this.state.currentPage+1).map((a,i) => { return <a key={i} className={this.getActiveClassName(a)} onClick={this.pageGo.bind(this)}>{a}</a>});
      rightRange = <a onClick={this.extendRightRange.bind(this)}>{this.props.breakLabel}</a>;
      rightBlock = <a onClick={this.pageGo.bind(this)}>{this.props.pageCount}</a>;
    }
    return <li>{leftBlock}{leftRange}{midBlock}{rightRange}{rightBlock}</li>;
  }
  
  render(){

    var previousClassName = this.state.currentPage == 1 ? this.props.disabledClassName : '';
    var nextClassName = this.state.currentPage == this.props.pageCount ? this.props.disabledClassName : '';
    return ( 
        <ul className={styles.pagination}>
          <li className={previousClassName}><a onClick={this.pageUp.bind(this)}>&laquo;</a></li>
          {this.renderPages()}
          <li className={nextClassName}><a onClick={this.pageDown.bind(this)}>&raquo;</a></li>
        </ul>
    );
  }
}

export default Pagination;
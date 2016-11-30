import React, { Component } from 'react';

import './FontPagerButton.css';

class FontPagerButton extends Component {
    constructor(props) {
		super(props);
        this.state = {
            i:this.props.index,
            currentPage:this.props.currentPage
        };
        this.navigate = function(page){
            props.navigate({number:16,page:page});
        };
        this.activeClass = function(){
            return 'page' + (this.props.currentPage===this.state.i?' active':'');
        }.bind(this);
	}
    render() {
        return (
            <button className={this.activeClass()} onClick={this.navigate.bind(this,this.state.i)}>{this.state.i}</button>
        );
    }
}

export default FontPagerButton;

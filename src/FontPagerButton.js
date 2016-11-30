import React, { Component } from 'react';

import './FontPagerButton.css';

class FontPagerButton extends Component {
    constructor(props) {
		super(props);
        console.log(this.props);
        this.state = {
            i:this.props.index
        };
        this.navigate = function(page){
            props.navigate({number:16,page:page});
        };
        //this.activeClass = 'page' + (this.props.currentPage===this.state.i?' active':'');
        this.activeClass = 'page';
	}
    render() {
        return (
            <button className={this.activeClass} onClick={this.navigate.bind(this,this.state.i)}>{this.state.i}</button>
        );
    }
}

export default FontPagerButton;

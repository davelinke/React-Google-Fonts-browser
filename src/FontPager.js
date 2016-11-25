import React, { Component } from 'react';

import './FontPager.css';

class FontPager extends Component {
    constructor(props) {
		super(props);
        this.items = [];
        this.navigate = function(page){
            props.navigate({number:16,page:page});
        };
        for (let i = 0; i < this.props.params.number; i++) {
            let activeClass = 'page' + (this.props.params.page===i?' active':'');
            this.items.push(<button key={i} className={activeClass} onClick={this.navigate.bind(this,i)}>{i}</button>);
        }
	}
    render() {
        return (
            <nav className="pager">{this.items}</nav>
        );
    }
}

export default FontPager;

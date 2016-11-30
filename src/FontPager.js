import React, { Component } from 'react';

import './FontPager.css';

import FontPagerButton from './FontPagerButton';

class FontPager extends Component {
    constructor(props) {
		super(props);
        this.renderPages = function(){
            let items = [];
            for (let i = 0; i < this.props.numPages; i++) {
                items.push(<FontPagerButton key={i} index={i} navigate={this.props.navigate} currentPage={this.props.currentPage} />);
            }
            return items;
        }.bind(this);
	}
    render() {
        return (
            <nav className="pager">{this.renderPages()}</nav>
        );
    }
}

export default FontPager;

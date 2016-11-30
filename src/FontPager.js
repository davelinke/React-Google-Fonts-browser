import React, { Component } from 'react';

import './FontPager.css';

import FontPagerButton from './FontPagerButton';

class FontPager extends Component {
    constructor(props) {
		super(props);
        console.log(props);
        this.items = [];
        for (let i = 0; i < this.props.params.number; i++) {
            this.items.push(<FontPagerButton key={i} index={i} navigate={props.navigate} currentPage={props.params.page} />);
        }
	}
    render() {
        return (
            <nav className="pager">{this.items}</nav>
        );
    }
}

export default FontPager;

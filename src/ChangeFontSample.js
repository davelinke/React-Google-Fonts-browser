import React, { Component } from 'react';
import './ChangeFontSample.css';

class ChangeFontSample extends Component {
	constructor(props) {
		super(props);
		this.state = {
			greetingName: ''
		};
		this.handleUpdate = function (event) {
			this.setState({
				greetingName: event.target.value
			});
		}.bind(this);
        this.modifyMessage = function(event){
            this.props.addGreeting(this.state.greetingName);
        }.bind(this);
	}
	render() {
		return (
			<div className="font-wrapper">
                <input className="sample-input" placeholder="Customize the font sample message" type="text" onChange={this.handleUpdate} onKeyUp={this.modifyMessage} />
            </div>
		);
	}
}

export default ChangeFontSample;

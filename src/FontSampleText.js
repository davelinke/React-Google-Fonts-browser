import React, { Component } from 'react';
class FontSampleText extends Component {
    render() {
        return (
            <div className="font-sample-text" style={this.props.style}>{this.props.message}</div>
        );
    }
}

export default FontSampleText;

import React, { Component } from 'react';
import './FontSample.css';
class FontSample extends Component {
    render() {
        const fontUrl = 'https://fonts.googleapis.com/css?family='+this.props.font.family;
        const fontName = this.props.font.family;
        const style = {
            fontFamily:this.props.font.family
        };
        return (
            <div>
                <link href={fontUrl} rel="stylesheet" type="text/css"></link>
                <div className="font-wrapper">
                    <div className="font-name">{fontName}</div>
                    <div className="font-sample" style={style}>{this.props.message}</div>
                </div>
            </div>
        );
    }
}

export default FontSample;

import React, { Component } from 'react';
import FontSampleText from './FontSampleText';
import './FontSample.css';
class FontSample extends Component {
    componentWillReceiveProps(){
        this.setState({
            isLoaded:false
        });
    }
    componentDidMount(){
        this.loadStylesheet(this.props.font.family);
    }
    componentDidUpdate(){
        this.loadStylesheet(this.props.font.family);
    }
    loadStylesheet(fontFamily){
        let fssLoaded = this.props.loadedStylesheets.indexOf(fontFamily);
        if (fssLoaded===-1){
            const sse = document.createElement('link');
            sse.rel =  'stylesheet';
            sse.href = 'https://fonts.googleapis.com/css?family='+fontFamily;
            sse.onload = (e) => {
                this.props.updateStylesheets(fontFamily);
                this.forceUpdate()
            };
            document.querySelector('head').append(sse);
        }
    }
    renderText(fontFamily){
        let fssLoaded = this.props.loadedStylesheets.indexOf(fontFamily);
        if (fssLoaded>-1){
            const style = {
                fontFamily:this.props.font.family
            };
            return <FontSampleText style={style} message={this.props.message} />;
        }
        return <div className="text-placeholder" />
    }
    render() {
        const fontName = this.props.font.family;

        return (
            <div className="font-sample-card">
                <div className="font-sample-container">
                    <div className="font-sample-name">{fontName}</div>
                    {this.renderText(fontName)}
                </div>
            </div>
        );
    }
}

export default FontSample;

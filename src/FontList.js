import React, { Component } from 'react';

import FontSample from './FontSample';
import ChangeFontSample from './ChangeFontSample';
import FontPager from './FontPager';
import Fonts from './Fonts';
import Messages from './Messages';

import './FontList.css';

class FontList extends Component {
    constructor(props){
        super(props);
        this.defFontParams = {
            number:16,
            page:0
        };
        this.state = {
            fonts:new Fonts(this.defFontParams).list,
            messages:Messages
        };
        this.renderFonts = function(){
            let demMessages = this.state.messages;
            let demFonts = this.state.fonts;
            return demFonts.map((font,i) => (<FontSample key={i} font={font} message={demMessages[i % demMessages.length]} />));
        }.bind(this);
        this.addGreeting = function(newName){
            this.setState({ messages: (newName?[newName]:Messages) });
        }.bind(this);
        this.navigate = function(newParams){
            document.querySelector('body').scrollTop = 0;
            this.setState({ fonts: new Fonts(newParams).list });
        }.bind(this);
    }
    render() {
        return (
            <div>
                <ChangeFontSample addGreeting={this.addGreeting} />
                <div className="hello-world-list">
                    {this.renderFonts()}
                </div>
                <FontPager params={this.defFontParams} navigate={this.navigate}></FontPager>
            </div>
        );
    }
}

export default FontList;

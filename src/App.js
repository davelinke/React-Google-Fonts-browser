import React, { Component } from 'react';
import FontList from './FontList';
import './App.css';

class App extends Component {
    constructor(props) {
		super(props);
        this.state = {
            loadedStylesheets:[]
        };
        this.updateStylesheets = function(fontFamily){
            let nuState = Object.assign({},this.state);
            nuState.loadedStylesheets.push(fontFamily);
            this.setState(nuState);
        }.bind(this);
	}
    shouldComponentUpdate(){return false}
    render(){
        return(
            <div className="App">
                <FontList loadedStylesheets={this.state.loadedStylesheets} updateStylesheets={this.updateStylesheets} />
            </div>
        );
    }
};
export default App;

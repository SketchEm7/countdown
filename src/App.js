import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { deadline: 'August, 10, 2018' };
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">
                    <h1>Off To the Fjords</h1>
                </div>
                <div className="App-date">
                    {this.state.deadline}
                </div>
                <Clock deadline={ this.state.deadline }/>
            </div>
        );
    }
}
export default App;

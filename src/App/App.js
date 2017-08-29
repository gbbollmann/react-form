import React, { Component } from 'react';
import './App.css';
import { applyPhoneMask } from '../Utils/Masks/masks';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    handleChange ({ target: { value }}) {
        this.setState({
            inputValue: applyPhoneMask(value)
        });
    }

    render() {
        return (
            <div className="App">
                <input
                    maxLength="15"
                    minLength="15"
                    type="tel"
                    onChange={this.handleChange.bind(this)}
                    value={this.state.inputValue} />

                {
                    this.state.inputValue
                }
            </div>
        );
    }
}

export default App;

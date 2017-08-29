import React, { Component } from 'react';
import './App.css';
import { applyPhoneMask, applyCurrencyMask } from '../Utils/Masks/masks';

class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    handleChange ({ target: { value }}) {
        this.setState({
            inputValue: applyCurrencyMask(value)
        });
    }

    render() {
        return (
            <div className="App">
                <input
                    maxLength="14"
                    minLength="14"
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

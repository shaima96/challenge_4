import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div class="row" data-x="0" data-y="0" />
                <div class="row" data-x="1" data-y="0" />
                <div class="row" data-x="2" data-y="0" />
            </div>
        )
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(<App />, document.getElementById("app"))
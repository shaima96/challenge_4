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
            <div className="board">
                <div id="1">
                    <Square x={0} y={1} />
                    <Square x={1} y={2} />
                    <Square x={2} y={3} />
                    <Square x={3} y={4} />
                    <Square x={4} y={5} />
                    <Square x={5} y={6} />
                </div>
                <div id="2">
                    <Square x={0} y={1} />
                    <Square x={1} y={2} />
                    <Square x={2} y={3} />
                    <Square x={3} y={4} />
                    <Square x={4} y={5} />
                    <Square x={5} y={6} />
                </div>
                <div id="3">
                    <Square x={0} y={1} />
                    <Square x={1} y={2} />
                    <Square x={2} y={3} />
                    <Square x={3} y={4} />
                    <Square x={4} y={5} />
                    <Square x={5} y={6} />
                </div>
                <div id="4">
                    <Square x={0} y={1} />
                    <Square x={1} y={2} />
                    <Square x={2} y={3} />
                    <Square x={3} y={4} />
                    <Square x={4} y={5} />
                    <Square x={5} y={6} />
                </div>
                <div id="5">
                    <Square x={0} y={1} />
                    <Square x={1} y={2} />
                    <Square x={2} y={3} />
                    <Square x={3} y={4} />
                    <Square x={4} y={5} />
                    <Square x={5} y={6} />
                </div>
                <div id="6">
                    <Square x={0} y={1} />
                    <Square x={1} y={2} />
                    <Square x={2} y={3} />
                    <Square x={3} y={4} />
                    <Square x={4} y={5} />
                    <Square x={5} y={6} />
                </div>
                <div id="7">
                    <Square x={0} y={1} />
                    <Square x={1} y={2} />
                    <Square x={2} y={3} />
                    <Square x={3} y={4} />
                    <Square x={4} y={5} />
                    <Square x={5} y={6} />
                </div>
            </div>
        )
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(<App />, document.getElementById("app"))
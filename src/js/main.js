"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var TextButton = require('../components/button');

class Hello extends React.Component {
    render() {
        return <div>
            <h1>Hello, {this.props.name}!</h1>
        </div>
    }
}

ReactDOM.render(
    <div className="jumbotron">
        <Hello name="Stuart" />
        <TextButton text="Click me!" />
    </div>,
    document.getElementById('app')
);
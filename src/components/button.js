"use strict"

var React = require('react');

class TextButton extends React.Component {
    render() {
        return <div>
            <button className="btn btn-primary">{this.props.text}</button>
        </div>
    }
}

module.exports = TextButton;
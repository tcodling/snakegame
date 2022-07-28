import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className={"cell " + this.props.active}>{this.props.x},{this.props.y}</div>)
    }
}

export default Cell
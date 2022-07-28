
import './App.css';

import Cell from './Cell.jsx'
import React from 'react';

let boardStats = {
  width: 20,
  height: 12
}

let startPosition = {
  x: 1,
  y: 1
}

const SPEED = {
  POSITIVE: 1,
  NEUTRAL: 0,
  NEGATIVE: -1
}

let rows = []

// for (let i = 1; i < boardStats.height+1; i++) {
//   let cells = []
//   for (let j = 1; j < boardStats.width+1; j++) {
//     cells.push(<Cell key={j + '-' + i} x={j} y={i} />)
//   }

//   rows.push(<div className="row">{cells}</div>)
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: startPosition.x,
      y: startPosition.y,
      direction: "W"
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      // 
      rows = []

      for (let i = 1; i < boardStats.height+1; i++) {
        let cells = []
        for (let j = 1; j < boardStats.width+1; j++) {
          cells.push(<Cell active={this.state.x == j && this.state.y == i ? 'active' : ''} key={j + '-' + i} x={j} y={i} />)
        }

        rows.push(<div className="row">{cells}</div>)
      }
      // 
      let xDir = SPEED.POSITIVE
      let yDir = SPEED.NEUTRAL
      if (this.state.direction === "E") {
        xDir = SPEED.POSITIVE
        yDir = SPEED.NEUTRAL
      }
      this.setState((prevState) => ({
        x: prevState.x + xDir,
        y: prevState.y + yDir
    }))
  }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div className="App">
        <h1>The Snake Game</h1>
        {/* <h3>Current Position: {this.state.x + ',' + this.state.y}</h3> */}
        <div id="grid">
          {rows.map(row => row)}
          
        </div>
      </div>
    );
  }
}

export default App;

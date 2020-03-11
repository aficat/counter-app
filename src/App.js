import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));

  increment = this.makeIncrementer(1);

  decrement = this.makeIncrementer(-1);

  render() {
    return (
      <div className="container" style={{ paddingTop: 50 }}>
        <Jumbotron>
          <h4>Count: {this.state.count}</h4>
          <br />
          <Button className="increment" onClick={this.increment}>Increment</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className="decrement" onClick={this.decrement}>Decrement</Button>
        </Jumbotron>
      </div>
    )
  }
}

export default App;
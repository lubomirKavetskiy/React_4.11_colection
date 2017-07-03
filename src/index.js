import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aRray: [
        {
          id: 1,
          text: 'item1',
        },
        {
          id: 2,
          text: 'item2',
        },
        {
          id: 3,
          text: 'item3',
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>App component</h1>
        <NewComponent arr={this.state.aRray} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

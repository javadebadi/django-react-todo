import React, { Component } from 'react';
import './App.css';

const list = [
  {
    "id": 1,
    "title": "Read Books",
    "body": "I have to read 100 pages about django project. In addition, I have to read some philosopical books."
  },
  {
    "id": 2,
    "title": "Write Proposals",
    "body": "I have to write a few paragraphs for our proposal. I need to do research and summarize my results."
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {list};
  }

  render () {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{ item.title }</h1>
            <p>{ item.body }</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';
import grapesjsEditor from './component/Library/Grapesjs'

class App extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    return (
      <div className="App">
        <grapesjsEditor />
      </div>
    );
  }
}

export default App;

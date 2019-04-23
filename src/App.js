import React, { Component } from 'react';
import './App.css';

// components
import Modal from './components/Modal';

class App extends Component {
  state = {
    show: false
};

showModal = e =>{ 
    this.setState({
        show: true
    });
};

  render() {
    return (
      <div className="App">
        <h1>Reduce Reuse ReCycle React Components</h1>
        <button onClick ={e =>{this.showModal();}}>show Modal</button>
        <Modal show={this.state.show}/>
      </div>
    );
  }
}

export default App;

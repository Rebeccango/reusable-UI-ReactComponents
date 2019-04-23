import React, { Component } from 'react';
import '../src/styles/App.css';
import '../src/styles/modal.css';

// components
import Modal from './components/Modal';

class App extends Component {
  state = {
    show: false
};

showModal = e =>{ 
    this.setState({
        show: !this.state.show
    });
};

  render() {
    return (
      <div className="App">
        {/* <h1>Reduce Reuse ReCycle React Components</h1> */}
        <button class='toggle-button' id='centered-toggle-button' onClick ={e =>{this.showModal(e);}}>show Modal</button>
        <Modal show={this.state.show}
               onClose={this.showModal}>This is the message in the Modal baby, come come come on in and let me out</Modal>
      </div>
    );
  }
}

export default App;

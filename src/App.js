import AddressBook from './Components/AddressBook'
import React, { Component } from 'react'
import './App.css';

class App extends Component {


  render() {
  return (
    
    <div className="App">
      <div id ='header-box'>
                <h2 id = "Home">Home</h2>
                </div>
     <AddressBook/>
    </div>
  );
}
}

export default App;

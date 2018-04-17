import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: []}
  
  componentDidMount(){
    fetch('/users').then(res => res.json())
    .then(users => this.setState({users}))
  }
  
  render() {
    const {
      users
    } = this.state
    return (
      <div className="App">
        <ul>
          {users.map(user =>
          <li key={user.id}>{user.userName}</li>
          )}

        </ul>
      </div>
    );
  }
}

export default App;

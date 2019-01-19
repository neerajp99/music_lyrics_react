import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Tracks from './components/MusicTracks/Tracks';
import MyProvider from './context';

class App extends Component {
  render() {
    return (
      <MyProvider>
      <div className="App">
        <Header />
        <Tracks />
      </div>
      </MyProvider>
    );
  }
}

export default App;

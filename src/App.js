import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tracks from "./components/MusicTracks/Tracks";
import MyProvider from "./context";
import { Route } from "react-router-dom";
import Lyrics from "./components/MusicTracks/Lyrics";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Route exact path="/" render={() => <Header />} />
          <Route exact path="/" render={() => <Tracks />} />
          <Route exact path="/lyrics/:id"  render={props => <Lyrics {...props} isAuthed={true} />} />
        </div>
      </MyProvider>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    tracks_list: [],
    heading: 'Top 20 tracks'
  };

  componentDidMount = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_APP_KEY
        }`
      )
      .then(result => {
        this.setState({
          tracks_list: result.data.message.body.track_list
        });
        console.log(this.state.tracks_list);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <MyContext.Provider
        value={
           this.state
        }
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const Consumer = MyContext.Consumer;
export default MyProvider;

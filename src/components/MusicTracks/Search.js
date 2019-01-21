import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";

class Search extends Component {
  state = {
    trackTitle: ""
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${
          this.state.trackTitle
        }&page_size=20&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_APP_KEY
        }`
      )
      .then(result => {
        dispatch({
          type: 'SEARCH_TRACKS',
          payload: result.data.message.body.track_list
        })
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <Consumer>
        {context => {
          const { dispatch } = context;
          return (
            <div className="lyrics_search">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <input
                  type="text"
                  placeholder="Search Lyrics"
                  className="lyrics_search_input"
                  name="trackTitle"
                  value={this.state.trackTitle}
                  onChange={this.onChange}
                />
                <br />
                <button type="submit">Submit</button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;

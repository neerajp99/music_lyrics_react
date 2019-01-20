import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount = () => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }/&apikey=${process.env.REACT_APP_APP_KEY}`
      )
      .then(result => {
        console.log(result.data);
        this.setState({
          lyrics: result.data.message.body.lyrics
        });
        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }/&apikey=${process.env.REACT_APP_APP_KEY}`
        );
      })
      .then(res => {
        console.log(res.data);
         this.setState({
          track: res.data.message.body.track
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {

    const { track, lyrics } = this.state;

    if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
      return <Spinner />
    }
    else {
      return (
      <React.Fragment>
        <p> Here goes the data</p>
      </React.Fragment>
      )
    }



  }
}

export default Lyrics;

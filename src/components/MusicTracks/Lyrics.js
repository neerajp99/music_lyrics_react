import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import Moment from "react-moment";

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
    const dateToFormat = "1976-04-19T12:59-0500";

    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-light lyrics_back_button mb-4">
            Go back
          </Link>
          <div className="lyrics_show_lyrics">
            <div className="lyrics_show_lyrics_box md4">
              <p className="lyrics_show_lyrics_box_para">
                {lyrics.lyrics_body}
              </p>
              <pre className="lyrics_show_lyrics_box_pre card">
                {track.track_name} by {track.artist_name}
              </pre>
              <span className="lyrics_show_lyrics_box_span">
                Last Updated: <Moment>{track.updated_time}</Moment>
              </span>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;

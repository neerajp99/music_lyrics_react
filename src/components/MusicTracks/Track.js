import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Track extends Component {
  render() {
    const { track } = this.props;
    return (
      <div className="col-md-6">
        <div className="card mb-4">
          <div className="lyrics_inner_card">
            <h4 className="lyrics_artist_name">{track.artist_name}</h4>
            <h6 className="lyrics_track_name">
              <strong>
                <i className="fas fa-play" />
              </strong>
              Track: {track.track_name}
            </h6>
            <h6 className="lyrics_album_name">
              <strong>
                <i className="fas fa-compact-disc" />
              </strong>
              Album: {track.album_name}
            </h6>

            <Link
              to={{
                pathname: `lyrics/${track.track_id}`
              }}
              className="btn btn-dark btn-block"
            >
              <i className="fas fa-chevron-right" /> View Lyrics
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;

import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../Spinner";
import Track from "./Track";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { tracks_list, heading } = value;

          if (tracks_list === undefined || tracks_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center"> {heading} </h3>
                <div className="row">
                  {tracks_list.map(track => (
                    <Track track = {track.track} key = {track.track.track_id}/>
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
export default Tracks;

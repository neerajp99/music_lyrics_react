import React, { Component } from 'react';
import { Consumer } from '../../context';

class Tracks extends Component {
  render() {
    return (
      <Consumer >
      {(value) => (
        <React.Fragment>
          {console.log(value.state)}

            <h1>Hello Wolrd</h1>


        </React.Fragment>



      )}

      </Consumer>
    )
  }
}
export default Tracks;

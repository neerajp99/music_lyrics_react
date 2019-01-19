import React, { Component } from "react";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    tracks_list: [
      {
        track: {
          track_name: "abcd"
        }
      },
      {
        track: {
          track_name: "lmakak"
        }
      }
    ]
  };
  render() {
    return <MyContext.Provider value = {{
      state: this.state
    }}>
      {this.props.children}
    </MyContext.Provider>;
  }
}


export const Consumer = MyContext.Consumer;
export default MyProvider;

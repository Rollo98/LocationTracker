import React, { Component } from "react";
import MapView from "react-native-maps";

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        initialPositio:{
          latitude:0,
          longitude:0,
          latitudeDelta:0,
          longitudeDelta:0
        },
        markerPosition:{
          latitude:0,
          longitude:0
        }
      
    }
  }
  render() { 
    return (  );
  }
}
 
export default App;

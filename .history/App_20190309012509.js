import React, { Component } from "react";
import MapView from "react-native-maps";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView initialRegion={this.state.initialPosition}>
          <MapView.Marker coordinate={this.state.markerPosition}>
            <View>
              <View />
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  }
});
export default App;

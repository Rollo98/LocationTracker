import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Constants, Location, Permissions } from "expo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: null,
      latitude: undefined,
      longitude: undefined
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      locationResult: JSON.stringify(location),
      latitude: JSON.stringify(location.latitude),
      longitude: JSON.stringify(location.longitude)
    });
  };

  render() {
    return (
      <View>
        <Text>
          {"\n"}Location: {this.state.locationResult}
          {"\n"}longitude: {this.state.longitude}
          {"\n"}latitude: {this.state.latitude}
        </Text>
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

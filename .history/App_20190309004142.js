import React, { Component } from "react";
import { Constants, Location, Permissions } from "expo";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid
} from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import haversine from "haversine";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: null,
      latitude: undefined,
      longitude: undefined,
      altitude: undefined
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
      latitude: JSON.stringify(location.coords.latitude),
      longitude: JSON.stringify(location.coords.longitude),
      altitude: JSON.stringify(location.coords.altitude)
    });
  };

  render() {
    return (
      <View>
        <Text>
          {"\n"}Location: {this.state.locationResult}
          {"\n"}longitude: {this.state.longitude}
          {"\n"}latitude: {this.state.latitude}
          {"\n"}altitude: {this.state.altitude}
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

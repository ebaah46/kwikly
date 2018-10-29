import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Drawer from "../navigation/Drawer";
import TabNav from "../navigation/TabNav";
import { Icon } from "native-base";

// import Drawer from "../navigation/MainNav";

class Home extends React.Component {
  static navigationOptions = {
     header: null,
    //title: "Kwikly",
    headerLeft: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor }} />
    )
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <TabNav />;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});
export default Home;

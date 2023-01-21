import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93ea20fe-e646-4a7a-af8d-900be7d3aff3"
        }}
        style={styles.TouchableOpacity_2_82}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_43"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ab12d6d-2d1f-492e-a9a9-10a415759c9a"
        }}
        style={styles.ImageBackground_2_85}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49f37b10-b7b7-434b-9d69-1e80c27a921b"
        }}
        style={styles.ImageBackground_2_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2624901-42e0-4a07-9a7d-0d7e6c4dd319"
        }}
        style={styles.ImageBackground_2_89}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4d13869-3306-437d-ba40-3f5c53b8d56f"
        }}
        style={styles.TouchableOpacity_2_92}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_43"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("219%") },
  TouchableOpacity_2_82: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_2_85: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("182%")
  },
  ImageBackground_2_86: {
    width: wp("12%"),
    height: hp("12%"),
    top: hp("184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_2_89: {
    width: wp("12%"),
    height: hp("12%"),
    top: hp("184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  TouchableOpacity_2_92: {
    width: wp("7%"),
    height: hp("11%"),
    top: hp("185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

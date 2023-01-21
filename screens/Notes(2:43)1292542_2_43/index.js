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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1823d78-2b21-4062-b80e-4bac4d36993c"
        }}
        style={styles.TouchableOpacity_5_101}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_13"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_5_104}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_80"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7405f2b-1368-49ff-ad4b-05a76ab888d7"
          }}
          style={styles.ImageBackground_2_68}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/781f15c7-75b6-4d0a-bb31-b0f95434755e"
          }}
          style={styles.ImageBackground_2_59}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("219%") },
  TouchableOpacity_5_101: {
    width: wp("15%"),
    height: hp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  TouchableOpacity_5_104: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("182%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_68: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_59: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

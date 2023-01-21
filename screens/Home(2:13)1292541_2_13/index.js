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
        style={styles.TouchableOpacity_3_97}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_43"))
        }
      >
        <View style={styles.View_2_28} />
        <View style={styles.View_2_29}>
          <Text style={styles.Text_2_29}>Create</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb127116-b98a-4419-927d-68a89c4081d0"
          }}
          style={styles.ImageBackground_2_23}
        />
      </TouchableOpacity>
      <View style={styles.View_3_99}>
        <View style={styles.View_2_39} />
        <View style={styles.View_2_31}>
          <Text style={styles.Text_2_31}>Open</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64f2eeb1-37d2-42db-a7e1-43fe304310a3"
          }}
          style={styles.ImageBackground_2_27}
        />
      </View>
      <View style={styles.View_2_36}>
        <Text style={styles.Text_2_36}>Welcome to Notez</Text>
      </View>
      <View style={styles.View_2_37}>
        <Text style={styles.Text_2_37}>Start your writing journey here...</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("219%") },
  TouchableOpacity_3_97: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("127%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_28: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 177, 27, 1)",
    borderWidth: 3
  },
  View_2_29: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_29: {
    color: "rgba(94, 94, 94, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_23: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%")
  },
  View_3_99: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("145%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_39: {
    flexGrow: 1,
    width: wp("49%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 177, 27, 1)",
    borderWidth: 3
  },
  View_2_31: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_31: {
    color: "rgba(94, 94, 94, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_27: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%")
  },
  View_2_36: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_2_36: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_37: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_2_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)

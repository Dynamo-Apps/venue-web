import React, { PureComponent, Fragment, Component } from "react";
import {
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
  Text,
  Platform,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
} from "react-native";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import * as yup from "yup";
import { Formik } from "formik";
import {
  COLOR_CARD_BACKGROUND,
  COLOR_GRADIENT_END,
  COLOR_GRADIENT_START,
  COLOR_LIGHT_GREY,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  COLOR_TEXT_DARK,
  COLOR_WHITE,
} from "../../../assets/colors/colors";
import { mainStyle } from "../../../styles/Styles";
import { moderateScale } from "react-native-size-matters";
import { Logo } from "../../../assets/images/logo.png";
import { LinearGradient } from "expo-linear-gradient";

const placeholder = "../../../assets/images/no-record.png";

export default class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isPasswordVisible: false,
    };
  }

  openDrawer() { }

  _renderTopPart() {
    return (
      <View style={{ height: "30%" }}>
        <ImageBackground
          source={require("../../../assets/images/gradient-image.png")}
          style={{
            // flex: 1 / 3,
            paddingTop: moderateScale(0),
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <View style={styles.logoView}>
            <Image
              resizeMode={"contain"}
              source={require("../../../assets/images/logo.png")}
              style={[styles.logo]}
            />
            {/* <View style={styles.imagView}> */}
            <Image
              resizeMode={"contain"}
              source={require("../../../assets/images/person-image.png")}
              style={[Platform != "web" ? styles.image : styles.imageWeb]}
            />
            {/* </View> */}
          </View>
        </ImageBackground>

      </View>
    );
  }
  onSubmit(email, password) {
    this.props.onPressLoginButton(email, password);
  }

  _renderInputSections() {
    return (
      <ScrollView style={[styles.inputView]}>
        <Formik
          initialValues={{
            email: this.state.email,
            password: this.state.password,
          }}
          onSubmit={(values) => this.onSubmit(values.email, values.password)}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email("Please enter a valid Email...")
              .required("Email is required..."),
            password: yup
              .string()
              .min(3, "Password must be at least 6 characters...")
              .required("Password is required..."),
          })}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <Fragment>
              <Text style={styles.placeholderText}>
                Your Email
              </Text>
              <Input
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                // placeholder="Email"
                // placeholderTextColor={COLOR_LIGHT_GREY}
                autoCorrect={false}
                customStyle={styles.inputField}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.password.focus();
                }}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <Text style={[styles.placeholderText, {
                marginTop: moderateScale(15)
              }]}>
                Password
              </Text>
              <Input
                isPasswordField
                inputRefs={(el) => (this.password = el)}
                value={values.password}
                customStyle={styles.inputField}

                isPasswordVisible={(val) =>
                  this.setState({ isPasswordVisible: val })
                }
                secureTextEntry={!this.state.isPasswordVisible}
                onChangeText={handleChange("password")}
                // placeholder="Password"
                // placeholderTextColor={COLOR_LIGHT_GREY}

                onBlur={() => setFieldTouched("password")}
                autoCorrect={false}
                onSubmitEditing={(value) => {
                  console.log(value);
                  if (isValid) {
                    this.onSubmit(value.email, value.password);
                  } else {
                    ToastAndroid("Please complete details");
                  }
                }}
              />
              {!touched.password && !errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <View style={{ alignSelf: 'flex-end' }}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </View>
              {/*{this.state.loginButtonLoader ? (
                <View
                  style={{
                    width: '100%',
                    height: '20%',
                  }}>
                  <Loader color={COLOR_WHITE} size={moderateScale(20)} />
                </View>
              ) : (*/}
              <Button
                onPressGo={handleSubmit}
                buttonText={"Sign In"}
                disabled={!isValid}
                textStyle={{
                  color: COLOR_WHITE,
                  fontSize: moderateScale(12),
                  // width: moderateScale(180),
                }}
                // gradient
                customStyle={{
                  opacity: !isValid ? 0.6 : 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: moderateScale(18),
                  //width:moderateScale,
                  padding: 10,
                  borderRadius: 100,

                  //flex: 1,
                  // height: moderateScale(40),
                  marginHorizontal: moderateScale(15),
                  //backgroundColor: 'red',
                }}
              />

              <Text style={styles.alreadyHaveText}>New User? <Text style={{ color: COLOR_PURPLE }}>Create an account</Text></Text>
              {/*   </TouchableOpacity> */}
              {/*)}*/}

              <Text style={styles.orText}>Or sign in using your social media</Text>
              <View style={{
                flexDirection: 'row', marginTop: moderateScale(30), justifyContent: "space-evenly", paddingBottom: 20,
              }}>


                <LinearGradient
                  start={{ x: 0.4, y: 0.7 }}
                  end={{ x: 1, y: 0 }}

                  colors={['#F9AB38', "#F9914B", '#F96E63']}

                  style={styles.socialView}>
                  <Text style={styles.socialText}>Facebook</Text>
                </LinearGradient>


                <LinearGradient
                  start={{ x: 0, y:1}}
                  end={{ x: 1, y: 0.5 }}

                  colors={['#F9AB38', "#F9914B", '#F96E63']}
                  style={styles.socialView}>
                  <Text style={styles.socialText}>Google</Text>
                </LinearGradient>


              </View>
            </Fragment>
          )}
        </Formik>
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={[styles.mainContainer]}>
        {this._renderTopPart()}

        {this._renderInputSections()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  socialText: {
    fontSize: moderateScale(10),
    textAlign: 'center',
    color: 'white'
  },
  socialView: {
    backgroundColor: 'white',
    paddingVertical: moderateScale(15),
    borderRadius: 100,
    width: moderateScale(120),
    paddingHorizontal: moderateScale(20),
    borderWidth: 0.1,
    borderColor: 'grey',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 23,
    shadowRadius: 4.16,

    elevation: 14,
  },
  forgotText: {
    color: COLOR_PURPLE,
    opacity: 0.6,
    fontSize: moderateScale(10)
  },
  image: {
    width: moderateScale(200),
    height: moderateScale(200),
    // backgroundColor:
  },
  imageWeb: {
    width: moderateScale(400),
    height: moderateScale(400),
  },
  imageView: {
    justifyContent: "center",
    alignContent: "center",
    width: moderateScale(400),
    // height: moderateScale(400),
    // flex: 1,
  },
  logo: {
    // position: "absolute",
    marginTop: moderateScale(50),
    // backgroundColor: "red",
    width: moderateScale(80),
    // height: moderateScale(100),
  },
  logoView: {
    alignContent: "space-between",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
  },
  orText: {
    fontSize: moderateScale(10),
    color: 'lightgrey',
    marginTop: moderateScale(40),
    // paddingVertical: moderateScale(10),
    textAlign: "center",
  },
  alreadyHaveText: {
    // textDecorationLine: "underline",
    fontSize: moderateScale(10),
    color: 'lightgrey',
    // paddingVertical: moderateScale(10),
    textAlign: "center",
    // paddingTop: moderateScale(15),
  },
  errorText: {
    fontSize: moderateScale(10),
    color: "red",
    paddingVertical: moderateScale(3),
    marginLeft: moderateScale(15),
  },
  inputField: {
    color: 'lightgrey',
    // borderWidth:1,
    fontSize: moderateScale(11),
    // height:100

    // backgroundColor: "red",
  },
  placeholderText: {
    fontSize: moderateScale(12),
    marginTop: moderateScale(20)
  },
  inputView: {
    //  flex:1/2,
    // paddingVertical:moderateScale(50),
    paddingHorizontal: moderateScale(35),

    //paddingTop: moderateScale(20),
  },
  greetingText: {
    textAlign: "left",
    //position: 'absolute',
    //top: 20,
    color: COLOR_PRIMARY,
    fontSize: moderateScale(30),
    //flex: 1,
  },

  emailText: {
    //color: COLOR_BLACK,
    paddingVertical: moderateScale(5),
    fontSize: moderateScale(14),
    color: COLOR_LIGHT_GREY,
  },
  mainContainer: {
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: '#fff',
    flex: 1,
  },
});

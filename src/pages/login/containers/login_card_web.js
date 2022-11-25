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
import Checkbox from "expo-checkbox";

import * as yup from "yup";
import { Formik } from "formik";
import {
  COLOR_BORDER,
  COLOR_CARD_BACKGROUND,
  COLOR_GRADIENT_END,
  COLOR_GRADIENT_START,
  COLOR_LIGHT_GREY,
  COLOR_PRIMARY,
  COLOR_PURPLE,
  COLOR_TEXT_DARK,
  COLOR_TEXT_LIGHT,
  COLOR_WHITE,
} from "../../../assets/colors/colors";
import { mainStyle } from "../../../styles/Styles";
import { moderateScale } from "react-native-size-matters";
import { Logo } from "../../../assets/images/logo.png";
import { LinearGradient } from "expo-linear-gradient";
import { showToast } from "../../../components/Toast";

const placeholder = "../../../assets/images/no-record.png";

export default class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isPasswordVisible: false,
      isRememberChecked: false,
    };
  }

  openDrawer() {}

  renderLeftView() {
    return (
      <View style={{ height: "100%", width: "45%" }}>
        <ImageBackground
          source={require("../../../assets/images/gradient-image.png")}
          style={{
            flex: 1,
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
            {/* <View style={styles.imageView}> */}
            <Image
              resizeMode={"contain"}
              source={require("../../../assets/images/person-image.png")}
              style={[styles.imageWeb]}
            />

            {/* </View> */}
          </View>
          <View
            style={{
              position: "absolute",
              bottom: "10%",
              marginStart: moderateScale(35),
            }}
          >
            <Text style={{ fontSize: moderateScale(16), color: "white" }}>
              Time to create a
            </Text>
            <Text
              style={{
                fontSize: moderateScale(28),
                color: "white",
                fontWeight: "500",
              }}
            >
              a long-lasting
            </Text>
            <Text
              style={{
                fontSize: moderateScale(28),
                color: "white",
                fontWeight: "500",
              }}
            >
              memory
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
  renderRightView() {
    return (
      <View
        style={{
          height: "100%",
          width: "55%",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            // justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(20),
              fontWeight: "600",
              alignSelf: "flex-start",
            }}
          >
            Sign In
          </Text>

          <View
            style={{
              flexDirection: "row",
              marginTop: moderateScale(20),
              justifyContent: "space-evenly",
              paddingBottom: 20,
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              colors={["#F9AB38", "#F9914B", "#F96E63"]}
              style={styles.socialView}
            >
              <Text style={styles.socialText}>Sign in with Facebook</Text>
            </LinearGradient>

            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              colors={["#F9AB38", "#F9914B", "#F96E63"]}
              style={[styles.socialView, { marginStart: moderateScale(10) }]}
            >
              <Text style={styles.socialText}>with Google</Text>
            </LinearGradient>
          </View>

          <View
            style={{
              marginVertical: moderateScale(20),
              backgroundColor: "lightgrey",
              width: moderateScale(30),
              height: moderateScale(1),
              alignSelf: "flex-start",
            }}
          ></View>
          <Text style={{ color: "grey", alignSelf: "flex-start" }}>
            Or sign in using your email address
          </Text>

          <View style={[styles.inputView]}>
            <Formik
              initialValues={{
                email: this.state.email,
                password: this.state.password,
              }}
              onSubmit={(values) =>
                this.onSubmit(values.email, values.password)
              }
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
                <View style={{ width: "100%" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.placeholderText}>Your Email</Text>
                      <Input
                        inputContainer={[
                          styles.container,
                          { marginEnd: moderateScale(10) },
                        ]}
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

                      <Text style={styles.errorText}>
                        {touched.email && errors.email ? errors.email : ""}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={[
                          styles.placeholderText,
                          {
                            marginTop: moderateScale(15),
                          },
                        ]}
                      >
                        Password
                      </Text>
                      <Input
                        inputContainer={styles.container}
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
                          showToast(value);
                          if (isValid) {
                            this.onSubmit(value.email, value.password);
                          } else {
                            showToast("Please complete details");
                          }
                        }}
                      />
                      {touched.password && errors.password && (
                        <Text style={styles.errorText}>
                          {touched.password && errors.password
                            ? errors.password
                            : ""}
                        </Text>
                      )}
                    </View>

                    {/* <Button
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
                    }}
                  /> */}

                    {/* <Text style={styles.alreadyHaveText}>
                    New User?{" "}
                    <Text style={{ color: COLOR_PURPLE }}>
                      Create an account
                    </Text>
                  </Text> */}
                  </View>
                  <View
                    style={{
                      marginTop: moderateScale(8),
                      flexDirection: "row",
                      width: "100%",
                      flex: 1,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Checkbox
                        style={styles.checkbox}
                        value={this.state.isRememberChecked}
                        onValueChange={() =>
                          this.setState({
                            isRememberChecked: !this.state.isRememberChecked,
                          })
                        }
                        color={
                          this.state.isRememberChecked
                            ? "#4630EB"
                            : COLOR_TEXT_LIGHT
                        }
                      />
                      <Text style={styles.rememberText}>Remember Me</Text>
                    </View>

                    <Text style={styles.forgotText}>Forgot Password?</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: moderateScale(20),
                    }}
                  >
                    <Button
                      onPressGo={handleSubmit}
                      buttonText={"Sign In"}
                      // disabled={!isValid}
                      textStyle={{
                        color: COLOR_WHITE,
                        fontSize: moderateScale(8),
                        fontWeight: "600",
                        flex: 1,
                        width: moderateScale(180),
                      }}
                      customStyle={{
                        opacity: isValid ? 1 : 0.5,
                      }}
                      // gradient
                      buttonStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        // marginTop: moderateScale(20),
                        borderRadius: 100,
                        height: moderateScale(30),
                        // marginHorizontal: moderateScale(15),
                        width: "50%",
                      }}
                    />
                    <Text style={styles.alreadyHaveText}>
                      New User?{" "}
                      <Text style={{ color: COLOR_PURPLE }}>
                        Create an account
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </View>
    );
  }
  onSubmit(email, password) {
    this.props.onPressLoginButton(email, password);
  }

  render() {
    return (
      <View style={[styles.mainContainer]}>
        {this.renderLeftView()}
        {this.renderRightView()}

        {/* {this._renderInputSections()} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rememberText: { color: COLOR_TEXT_LIGHT },
  checkbox: { marginEnd: 8 },
  container: {
    marginTop: moderateScale(10),
    flexDirection: "row",
    alignItems: "center",
    //borderWidth: 1,
    height: moderateScale(30),
    paddingVertical: 0,
    paddingHorizontal: moderateScale(15),
    borderColor: COLOR_BORDER,
    borderWidth: 1,
    borderRadius: 100,
  },
  socialText: {
    fontSize: moderateScale(8),
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
  socialView: {
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 33.0,

    // elevation: 24,

    // backgroundColor: "white",
    paddingVertical: moderateScale(10),
    borderRadius: 100,
    width: moderateScale(150),
    // paddingHorizontal: moderateScale(20),
    // borderWidth: 0.1,
    // borderColor: "grey",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 23,
    // shadowRadius: 4.16,

    // elevation: 14,
  },
  forgotText: {
    fontWeight: "600",
    marginStart: moderateScale(10),
    color: COLOR_PURPLE,
    // opacity: 0.6,
    fontSize: moderateScale(8),
  },
  image: {
    width: moderateScale(200),
    height: moderateScale(200),
    // backgroundColor:
  },
  imageWeb: {
    // backgroundColor: "red",
    marginStart: moderateScale(20),
    width: moderateScale(380),
    height: moderateScale(380),
    top: 0,
    position: "absolute",
  },
  imageView: {
    margin: 0,
    padding: 0,
    alignItems: "flex-start",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",

    // flex: 1,
  },
  logo: {
    // position: "absolute",
    // marginTop: moderateScale(50),
    // backgroundColor: "red",
    width: moderateScale(80),
    height: moderateScale(80),
  },
  logoView: {
    marginStart: moderateScale(35),
    // alignContent: "space-between",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    // alignSelf: "center",
  },
  orText: {
    fontSize: moderateScale(10),
    color: COLOR_TEXT_LIGHT,
    marginTop: moderateScale(40),
    // paddingVertical: moderateScale(10),
    textAlign: "center",
  },
  alreadyHaveText: {
    // textDecorationLine: "underline",
    fontSize: moderateScale(8),
    color: COLOR_TEXT_LIGHT,
    // paddingVertical: moderateScale(10),
    // textAlign: "center",
    // paddingTop: moderateScale(15),
  },
  errorText: {
    height: moderateScale(10),
    fontSize: moderateScale(5),
    color: "red",
    paddingVertical: moderateScale(5),
    // marginLeft: moderateScale(15),
  },
  inputField: {
    // backgroundColor: "red",

    color: COLOR_TEXT_LIGHT,
    // borderWidth:1,
    fontSize: moderateScale(9),
    height: "100%",

    // backgroundColor: "red",
  },
  placeholderText: {
    fontWeight: "600",
    fontSize: moderateScale(8),
    marginTop: moderateScale(15),
  },
  inputView: {
    width: "100%",
    // paddingVertical:moderateScale(50),
    // paddingHorizontal: moderateScale(35),
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
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
  },
});

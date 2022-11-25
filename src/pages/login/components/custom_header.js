import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import LinearGradient from 'expo-linear-gradient';
import {
  COLOR_GRADIENT_END,
  COLOR_GRADIENT_START,
} from '../../../assets/colors/colors';
import {moderateScale} from 'react-native-size-matters';

export default class CustomHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friendFaceCount: 12,
    };
  }

  openDrawer() {}

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <LinearGradient
          colors={[COLOR_GRADIENT_START, COLOR_GRADIENT_END]}
          style={styles.container}></LinearGradient> */}

        <View style={styles.greetingView}>
          <View>
            {/*<View
              style={[
                //mainStyle.flexDirectionRow,
                mainStyle.paddingHorizontal10,
              ]}>
              <Text style={styles.greetingText}>Login</Text>
              <Text style={styles.usernameText}>Lets get started</Text>
            </View>*/}
            {/*<Text
              style={[styles.showAroundText, mainStyle.paddingHorizontal10]}>
              {this.state.friendFaceCount} can show you around
            </Text>*/}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.5,

    //justifyContent: 'center',
    //backgroundColor: '#FE4C5A',
  },
  container: {
    transform: [
      {
        scaleX: 1.5,
      },
    ],

    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    flex: 1,
    //justifyContent: 'center',
    //backgroundColor: '#FE4C5A',
  },
  greetingView: {
    elevation: 20,
    flexDirection: 'row',
    position: 'absolute',
    top: moderateScale(50),
    paddingLeft: moderateScale(20),
    //justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'flex-start',
  },
  greetingText: {
    textAlign: 'left',
    //position: 'absolute',
    //top: 20,
    fontSize: moderateScale(25),
    //flex: 1,
  },
  showAroundText: {
    fontSize: moderateScale(13),
  },
  profileImage: {
    width: 60,
    height: 60,
  },
  usernameText: {
    //color: COLOR_BLACK,
    paddingVertical: moderateScale(5),
    fontSize: moderateScale(10),
  },
  goingText: {
    //color: COLOR_BLACK,
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
});

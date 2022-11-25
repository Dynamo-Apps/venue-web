//USE import {"function name"} from 'helpers/functions';

import {Dimensions} from 'react-native';
import {API_LINK} from './constants';
import {showToast} from '../components/Toast';
import { AsyncStorage } from 'react-native';

//Setting up global variable
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const validateEmail = (text) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};



//To be used in all Services Call
export const fetchAPI = (route, requestOptions) => {
  //console.log('fetchAPI', API_LINK + route, requestOptions);
  return fetch(API_LINK + route, requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.error) {
        showToast(response.error);
      }
      return response;
    })
    .catch((error) => {
      showToast('ERROR: ' + error + ' in ' + route + ' in Fetch API');
      console.log('ERROR: ' + error + ' in ' + route + ' in Fetch API');
      return false;
    });
};

export const rad = (x) => {
  return (x * Math.PI) / 180;
};

export const getDistance = (p1, p2) => {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.latitude - p1.latitude);
  var dLong = rad(p2.longitude - p1.longitude);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.latitude)) *
      Math.cos(rad(p2.latitude)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  return d; // returns the distance in meter
};

//Check if Object is empty
export const isObjectEmpty = (obj) => {
  console.log('isObej empty', Object.keys(obj).length === 0);
  return Object.keys(obj).length === 0;
};

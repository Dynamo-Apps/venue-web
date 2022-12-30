import {fetchAPI} from '../../../helpers/functions';

/**
 * Login Tourist API
 * @return function
 */

export const _login = (email, password) => {
  let formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  let route = 'guide_login';
  let requestOptions = {
    method: 'POST',
    header: {
      //Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    redirect: 'follow',
    body: formData,
  };
  return fetchAPI(route, requestOptions);
};




import client, { METHODS } from './client';

export const api = {
  Users: {
    register: (params) =>
      client({
        url: '/registration',
        data: params,
        method: METHODS.POST,
      }),
      verifyOtp: (params) =>
        client({
          url: '/verifyotp',
          data: params,
          method: METHODS.POST,
        }),
   
    login: (params) =>
      client({
        url: '/api/login',
        data: params,
        method: METHODS.POST,
      }),
  
  },


  
};

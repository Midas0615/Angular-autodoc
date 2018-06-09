import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getAccessToken(): String {
    return window.localStorage['access_token'];
  }

  getRefreshToken(): String {
    return window.localStorage['refresh_token'];
  }

  saveToken(access_token: String, refresh_token: String) {
    window.localStorage['access_token'] = access_token;
    window.localStorage['refresh_token'] = refresh_token;
  }

  destroyToken() {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');
  }

}

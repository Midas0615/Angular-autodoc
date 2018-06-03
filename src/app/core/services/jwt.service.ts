import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getAccessToken(): String {
    return window.localStorage['accessToken'];
  }

  getRefreshToken(): String {
    return window.localStorage['refreshToken'];
  }

  saveToken(accessToken: String, refreshToken: String) {
    window.localStorage['accessToken'] = accessToken;
    window.localStorage['refreshToken'] = refreshToken;
  }

  destroyToken() {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
  }

}

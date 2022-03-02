import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { User } from '../model/user.model';

//response data firebase
interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenExpirationNumber: any;
  user = new Subject<User>(); //search what is subject
  constructor(private http: HttpClient, private router: Router) {}
  signup(email: string, password: string, name: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAHf3LUBJrjNJnLB9LoQdOKPE2VwwB3-Zo',
        {
          email: email,
          password: password,
          name: name,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }
  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAHf3LUBJrjNJnLB9LoQdOKPE2VwwB3-Zo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }
  autologin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')!);
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();

      this.autologout(expirationDuration);
    }
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autologout(expiresIn * 1000);
    localStorage.setItem('usrData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'error occured!';
    if (!errorRes.error || !errorRes.error.error.message)
      return throwError(errorMessage);
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'this email already exist';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'this email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'wrong password';
        break;
      case 'USER_DISABLED':
        errorMessage = 'user disabed';
        break;
    }
    return throwError(errorMessage);
  }
  logout() {
    // this.user.next(null);
    this.router.navigate(['/signin']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationNumber) {
      clearTimeout(this.tokenExpirationNumber);
    }
    this.tokenExpirationNumber = null;
  }
  autologout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationNumber = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  // autologut(expirationDuration:number)(
  //   setTimeout(()=>{
  //     this.logout();}),expirationDuration
}

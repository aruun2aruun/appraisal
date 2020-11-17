import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = sessionStorage;
    const isLoggedIn = currentUser && currentUser.idToken;
    if (isLoggedIn) {
        request = request.clone({
            setHeaders: {
              IdentityToken: `${currentUser.idToken}`,
              Authorization: `${currentUser.accessToken}`
            }
        });
    }
    return next.handle(request);
  }
}

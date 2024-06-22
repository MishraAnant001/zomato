import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private service :TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.service.getToken()
    const modifiedRequest = request.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    })
    return next.handle(modifiedRequest);
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private getToken(){
    return 'sdkjfsdf-sfdsfdsf-sdfsdfsdf';
  }

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    const token = this.getToken();
    const authToken = token ? 
      request.clone({headers: request.headers.set('Authorization', `bearer${token}`)})
      : request

    return next.handle(authToken).pipe(
      catchError(error => {

        if(error.status === 400){
          console.log('sdfdf')
        }
        return throwError(() => error)
      })
    )
    



  }
}

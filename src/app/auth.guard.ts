import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authServiceService:AuthServiceService, private router:Router){

  }
  canActivate(): boolean {
    if(this.authServiceService.isLoggedIn()){
      return true
    }else {
      this.router.navigate(['./'])
      return false;
    }
  }
  
}

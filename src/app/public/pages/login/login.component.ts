import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo_electronico: any;
  contrasena: any;
  selectedUserType: 'login' | 'keeper' | 'traveller' = 'login';

  constructor(private router: Router){}
  goToRegister(){
    this.router.navigateByUrl('/register-keeper');
  }

  goToKeeper(){
    this.router.navigateByUrl('/home-keeper');
  }

  goToTraveller(){
    this.router.navigateByUrl('/home-traveller');
  }
  goToLogin(){
    this.router.navigateByUrl('/sign-in');
  }

  selectUserType(type: 'keeper' | 'traveller') {
    this.selectedUserType = type;
  }

  login(){
    if(this.selectedUserType == 'keeper'){
      this.goToKeeper();
    }
    else if(this.selectedUserType == 'traveller')
    {
      this.goToTraveller();
    }
  }

}

import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  correo_electronico: any;
  contrasena: any;
  selectedUserType: 'keeper' | 'traveller' | null = null;

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

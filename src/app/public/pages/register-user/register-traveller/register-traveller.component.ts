import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-traveller',
  templateUrl: './register-traveller.component.html',
  styleUrls: ['./register-traveller.component.css']
})
export class RegisterTravellerComponent {
  name = '';
  lastName= '';
  birthdate = '';
  phone = '';
  email = '';
  password = '';
  repeat_password = '';

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
  goToRegisterKeeper(){
    this.router.navigateByUrl('/register-keeper');
  }
  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['']).then();
    console.log("Signed Out");
  }
}

import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-keeper',
  templateUrl: './register-keeper.component.html',
  styleUrls: ['./register-keeper.component.css']
})
export class RegisterKeeperComponent {
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

  goToRegisterTraveller(){
    this.router.navigateByUrl('/register-traveller');
  }
  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['']).then();
    console.log("Signed Out");
  }
}

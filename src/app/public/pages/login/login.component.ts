import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  correo_electronico: any;
  contrasena: any;
  currentSlide: number = 0;


  slides = [
    { title: 'Close2Home', imageUrl: 'assets/travel1.jpg' },
    { title: 'Close2Home', imageUrl: 'assets/travel2.jpg' },
    { title: 'Close2Home', imageUrl: 'assets/travel3.jpg' },
    { title: 'Close2Home', imageUrl: 'assets/travel4.jpg' },
  ];

  selectedUserType: 'login' | 'keeper' | 'traveller' = 'login';

  constructor(private router: Router){
  }

  goToRegister(){
    this.router.navigateByUrl('/register-keeper');
  }

  ngOnInit(): void {
    this.autoNextSlide();
  }

  /**/
  nextSlide() {
    if (this.currentSlide < this.slides.length - 2) {
      this.currentSlide += 1;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide -= 1;
    } else {
      this.currentSlide = this.slides.length - 2;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  get visibleSlides() {
    return this.slides.slice(this.currentSlide, this.currentSlide + 2);
  }


  autoNextSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }
  /**/

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

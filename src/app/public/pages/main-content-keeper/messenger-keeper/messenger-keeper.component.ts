import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MensajeriaService} from "../../../services/mensajeria.service";
import {Mensajeria} from "../../../model/mensajeria";

@Component({
  selector: 'app-messenger-keeper',
  templateUrl: './messenger-keeper.component.html',
  styleUrls: ['./messenger-keeper.component.css']
})
export class MessengerKeeperComponent implements OnInit{

  mensaje:Mensajeria[]=[];

  constructor(private router: Router,private mensajeriaservice:MensajeriaService){}

  ngOnInit() {

    this.mensajeriaservice.getAll().subscribe((response:any)=>{

      this.mensaje=response
    })
  }

  goToKeeper(){
    this.router.navigateByUrl('/home-keeper');
  }
  goToFindHouse(){
    this.router.navigateByUrl('/find-house');
  }
  goToProfile(){
    this.router.navigateByUrl('/profile-keeper');
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }
}

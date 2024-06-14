import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MensajeriaService} from "../../../services/mensajeria.service";
import {Mensajeria} from "../../../model/mensajeria";
import {ChatMessage} from "../../../model/chat-message";

@Component({
  selector: 'app-messenger-keeper',
  templateUrl: './messenger-keeper.component.html',
  styleUrls: ['./messenger-keeper.component.css']
})
export class MessengerKeeperComponent implements OnInit{

  messageInput: string = "";
  userId: string = "";
  messageGeneralList: ChatMessage[]=[];

  constructor(private router: Router,private mensajeriaservice:MensajeriaService){}

  ngOnInit() {
    this.userId = "1"; //obtener userid de usuario actual
    this.mensajeriaservice.joinRoom("ChatGeneral")
    this.listenerMessage();
  }

  sendMessage(){
    if(this.messageInput.trim()){
      const chatMessaje: ChatMessage = {
        content: this.messageInput,
        sender: this.userId
      }; //ChatMessage si no funciona
      this.mensajeriaservice.sendMessage("ChatGeneral", chatMessaje);
      this.messageInput = "";
    }
  }

  listenerMessage(){
    const subscription = this.mensajeriaservice.getMessageSubject().subscribe((messages: ChatMessage[])=>{
      this.messageGeneralList = messages;
      console.log('Messages received in component:', this.messageGeneralList);

        /*
        .map((item: any)=>({
        ...item,
        message_side: item.sender === this.userId ? 'sender': 'receiver'
      }))*/
    });
    console.log('Subscription:', subscription);
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

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/base.service";
import {Mensajeria} from "../model/mensajeria";
import {BehaviorSubject, Observable} from "rxjs";
import * as SockJS from "sockjs-client";
import {Client, IFrame, IMessage} from "@stomp/stompjs";
import {ChatMessage} from "../model/chat-message";

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {
  private stompClient: Client | null = null;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  private connected: boolean = false;

  constructor() {
    this.initConnectionSocket();
  }

  initConnectionSocket(){
    const url = '//localhost:8080/chat-socket';
    this.stompClient = new Client({
      webSocketFactory: ()=> new SockJS(url),
      debug: (str) => console.log(str),
      reconnectDelay: 5000,
      onConnect: this.onConnect.bind(this),
      onStompError: this.onError.bind(this),
      onWebSocketClose: this.onWebSocketClose.bind(this),
    });
    this.stompClient.activate();
  }
  private onConnect = (frame: IFrame) => {
    console.log('Connected: '+ frame);
    this.connected = true;
    // Handle successful connection and subscriptions
  };

  private onError = (frame: IFrame) => {
    console.error('STOMP Error: '+ frame.headers['message']);
    console.error('Detailed error: ' + frame.body);
    this.connected = false;
    // Handle connection error
  };

  private onWebSocketClose(evt: CloseEvent) {
    const target = evt.target as WebSocket | null;
    const url = target?.url || 'unknown';
    console.log(`Connection closed to ${url}`);
    this.connected = false;
  }

  joinRoom(roomId: string){
    if (this.stompClient && this.stompClient.connected){
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: IMessage)=>{
        try{
          const messageContent: ChatMessage = JSON.parse(messages.body);
          console.log('Received message:', messageContent);

          const currentMessages = this.messageSubject.getValue();
          //currentMessages.push(messageContent);
          this.messageSubject.next(currentMessages);
        } catch (error){
          console.error('Error parsing message body:', messages.body);
        }
      });
      console.log(`Subscribed to room ${roomId}`);
    }else {
      console.error('Cannot join room: STOMP client is not connected');
    }
  }

  sendMessage(roomId: string, chatMessage: ChatMessage){
    if (this.connected && this.stompClient){
      this.messageSubject.next([chatMessage]);
      const messageBody = JSON.stringify(chatMessage);
      this.stompClient.publish({
        destination: `/app/chat/${roomId}`,
        body: messageBody
      });
      console.log('Sent message:', messageBody);

    }else {
      console.error('Cannot send message: STOMP client is not connected');
    }
  }

  getMessageSubject(): Observable<ChatMessage[]> {
    return this.messageSubject.asObservable();
  }

  testObservable() {
    const testMessages: ChatMessage[] = [
      { sender: 'TestUser', content: 'Hello' },
      { sender: 'AnotherUser', content: 'Hi there' }
    ];
    this.messageSubject.next(testMessages);
    const currentMessages = this.messageSubject.getValue();
    console.log("send help")
    currentMessages.forEach(console.log)

  }
}



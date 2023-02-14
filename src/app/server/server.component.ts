import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
allowNewServer=false;
serverFile:string="";
serverCreatedString="Server is not created!";
constructor(){
   setTimeout(() => {
  this.allowNewServer=true;
}, 2000);}

onServerCreate(){
  this.serverCreatedString="Server is created!";
}
  // serverId:number=10;
  // serverName:string="HelloBasket";
}

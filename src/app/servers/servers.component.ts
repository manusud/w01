import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer' , 'Testeserver 2'];

  constructor() { 
    
    setTimeout(() => {
      this.allowNewServer = true;
    },2000); 
  }

  ngOnInit(): void {
  }

  onCreateServer () {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was create! Name is ' + this.serverName;
  }

  onUpdateServerName (event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

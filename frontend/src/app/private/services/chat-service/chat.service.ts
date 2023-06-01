import { Injectable } from '@angular/core';
import { CustomSocket } from '../../sockets/custom-socket';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage() {
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }
}
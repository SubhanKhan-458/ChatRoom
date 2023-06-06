import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { tokenGetter } from 'src/app/app.module';

const config: SocketIoConfig = {
  url: 'http://localhost:3000', options: {
    extraHeaders: {
      Authorization: tokenGetter()
      // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6InN1YmhhbmtoYW4iLCJlbWFpbCI6InN1YmhhbmtoYW5AaG90bWFpbC5jb20ifSwiaWF0IjoxNjg1OTc5MTU0LCJleHAiOjE2ODU5ODkxNTR9.2iYa2viuRWaggm6TFOVGgjGE5zLB7VDjZmRDoVPicL8",
    
    }
  }
};

@Injectable({providedIn: 'root'})
export class CustomSocket extends Socket {
  constructor() {
    super(config)
  }
}
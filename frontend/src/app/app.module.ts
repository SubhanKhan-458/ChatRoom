import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';
// import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

  export function tokenGetter(): string {
    const token = localStorage.getItem('nestjs_chat_app');
    return token ? token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6InN1YmhhbmtoYW4iLCJlbWFpbCI6InN1YmhhbmtoYW5AaG90bWFpbC5jb20ifSwiaWF0IjoxNjg1OTc5NzYzLCJleHAiOjE2ODU5ODk3NjN9.FW-LV1TCcsxr7TXlLhqxrzdi_svXmaHOWyd6Y-jwUCM'; // Provide a default value when token is null or not found
  }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
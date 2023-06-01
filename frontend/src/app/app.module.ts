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
// import { config } from 'rxjs';
const config: SocketIoConfig = { url: "http://localhost:3000", options: {
  extraHeaders: {
    // Authorization: tokenGetter(),
  }
} };


export function tokenGetter() {
  return localStorage.getItem("nestjs_chat_app");
}

@NgModule({
  declarations: [
    AppComponent
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
    }),
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
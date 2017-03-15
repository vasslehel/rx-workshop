import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ChatBoxComponent } from './components/chatbox.component';

import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  entryComponents: [ChatBoxComponent],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

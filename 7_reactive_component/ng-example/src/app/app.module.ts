import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatBoxComponent } from './components/chatbox.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ChatBoxComponent],
  entryComponents: [ChatBoxComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

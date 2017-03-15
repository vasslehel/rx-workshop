import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs/Rx';

@Component({
  templateUrl: 'chatbox.component.html'
})
export class ChatBoxComponent implements Observer<any> {

  public message: string;

  constructor() { }

  next(res) {
    this.message = res.message;
  }
  error() {
    this.message = 'Something went wrong';
  }
  complete() {}
}
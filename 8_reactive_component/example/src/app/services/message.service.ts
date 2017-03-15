import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  getMessages(id: number) {
    return this.http.get('http://localhost:3000/users/' + id).map(res => res.json());
  }
}
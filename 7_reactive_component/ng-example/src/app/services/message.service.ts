import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) {}

  getMessages(id: number) {
    return this.http.get('http://localhost:3000/userMessages/' + id).pipe(
      map((res: any) => res.message),
      catchError(err => of('Something bad happend'))
    );
  }
}

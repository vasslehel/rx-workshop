import { timer, Subject } from 'rxjs';
import { take, share } from 'rxjs/operators';

// Warm Observable. Starts emiting only when there is a Subscriber, but the stream is shared between subscribers
// const stream$ = timer(0, 1000).pipe(
//   take(6),
//   share()
// );

// setTimeout(() => {
//   stream$.subscribe(v => console.log(`First subscriber: ${v}`));
// }, 3500);

// setTimeout(() => {
//   stream$.subscribe(v => console.log(`Second subscriber: ${v}`));
// }, 5000);

// Hot Observable
const subject = new Subject();
const source$ = subject.asObservable().pipe(take(6));
let counter = 0;
setInterval(() => {
  subject.next(counter);
  counter += 1;
}, 1000);

setTimeout(() => {
  source$.subscribe(v => console.log(`First subscriber: ${v}`));
}, 3500);

setTimeout(() => {
  source$.subscribe(v => console.log(`Second subscriber: ${v}`));
}, 5000);

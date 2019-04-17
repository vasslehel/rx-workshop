import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

const stream$ = timer(1000, 1000).pipe(take(6));

setTimeout(() => {
  stream$.subscribe(v => console.log(`First subscriber: ${v}`));
}, 1500);

setTimeout(() => {
  stream$.subscribe(v => console.log(`Second subscriber: ${v}`));
}, 2000);

import { race, of, zip, interval, from } from 'rxjs';
import {
  delay,
  flatMap,
  filter,
  map,
  tap,
  reduce,
  switchMap
} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const pipeArray = [
  'evERytHinG',
  2,
  'Is',
  [6, 2, 9],
  '  A',
  { id: 41 },
  'sTReam'
];

// Pipe effect
zip(interval(500), from(pipeArray))
  .pipe(
    flatMap(e => e),
    filter(e => typeof e === 'string'),
    map(e => e.trim().toLowerCase()),
    tap(x => console.log(x)),
    reduce((acc, val) => (acc += val + ' '), '')
  )
  .subscribe(word => {
    console.log(word);
  });

// Cancelled ajax requests sample
// zip(
//   interval(1000),
//   from([
//     'http://localhost:3000/users/1',
//     'http://localhost:3000/users/2',
//     'http://localhost:3000/users/3'
//   ])
// )
//   .pipe(
//     tap(valueAndUri => console.log(valueAndUri[1])),
//     switchMap(valueAndUri => ajax(valueAndUri[1]))
//   )
//   .subscribe(
//     res => console.log(res.response),
//     err => console.log(`Something went wrong ${err}`),
//     () => console.log('All ajax requests have finished')
//   );

// Race
// const first$ = of('first').pipe(delay(1100));
// const second$ = of('second').pipe(delay(1000));

// const race$ = race(first$, second$);

// race$.subscribe(val => console.log(val));

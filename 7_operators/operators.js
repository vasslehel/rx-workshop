'use strict';
import Rx from 'rxjs/Rx';

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
/*
Rx.Observable
  .zip(Rx.Observable.interval(500), 
       Rx.Observable.from(pipeArray))
  .flatMap(e => e)
  // .do(x => console.log(x))
  .filter(e => typeof e === 'string')
  .map(e => e.trim().toLowerCase())
  .subscribe((word) => {
    console.log(word);
});
*/

// Cancelled ajax requests sample
Rx.Observable.zip(
  Rx.Observable.interval(1000),
  Rx.Observable.from(
    [
      'http://localhost:3000/users/1',
      'http://localhost:3000/users/2',
      'http://localhost:3000/users/3'
    ])
)
  .do(valueAndUri => console.log(valueAndUri))
  .switchMap(valueAndUri => Rx.Observable.ajax(valueAndUri[1]))
  .subscribe(
  (res) => console.log(res.response),
  (err) => console.log(`Something went wrong ${err}`),
  () => console.log('All ajax requests have finished')
  );
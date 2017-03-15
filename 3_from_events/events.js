'use strict';
import Rx from 'rxjs/Rx';

const body = document.getElementById('body');
const button = document.getElementById('button');


// Create observable sequence from native DOM event
Rx.Observable.fromEvent(button, 'click').subscribe((ev) => {
  console.log(ev);
});

// Create observable sequence from native DOM event
// Rx.Observable.fromEvent(body, 'mousemove').subscribe((ev) => {
//   console.log(`X: ${ev.clientX} \nY: ${ev.clientY}`);
// });

// document.addEventListener('scroll', () => console.log('scrolled'));
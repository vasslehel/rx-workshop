'use strict';
import { fromEvent, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const body = document.getElementById('body');
const button = document.getElementById('button');

// Create observable sequence from native DOM event
const click$ = fromEvent(button, 'click');
const scroll$ = fromEvent(document, 'scroll');
const mouseMove$ = fromEvent(body, 'mousemove');

// Combined
const combined$ = merge(scroll$, mouseMove$).pipe(takeUntil(click$));

// Consume the events
// click$.subscribe(ev => console.log(ev));
// scroll$.subscribe(() => console.log('scrolled'));
// mouseMove$.subscribe(ev => console.log(`X: ${ev.clientX} \nY: ${ev.clientY}`));

combined$.subscribe(val => console.log(val));

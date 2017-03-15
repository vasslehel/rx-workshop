'use strict';
import Rx from 'rxjs/Rx';

// Create Observable from value(s)
// Passing string vs array
const fromString$ = Rx.Observable.from('hello');
const fromArray$ = Rx.Observable.from(['hello']);
const fromObject$ = Rx.Observable.from([{key: 'hello'}]);

fromString$.subscribe((res) => console.log(res));
fromArray$.subscribe((res) => console.log(res));
fromObject$.subscribe((res) => console.log(res));

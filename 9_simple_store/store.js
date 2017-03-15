'use strict';
const Rx = require('rxjs/Rx');

class RxStore {
  constructor() {
    // this.store = new Rx.Subject();
    this.store = new Rx.ReplaySubject();
  }

  dispatch(message) {
    this.store.next(message);
  }

  subscribe(observer) {
    return this.store.subscribe(observer);
  }
}

const myStore = new RxStore();

// difference between Subject and ReplaySubject - demonstarte with changing dispatch and subscribe order
myStore.dispatch('Hello');
myStore.dispatch('World');  // It's an accumulator

myStore.subscribe(v => console.log(v));
myStore.subscribe(v => console.log('Second subscriber ' + v));
import { Subject, ReplaySubject } from 'rxjs';

class RxStore {
  constructor() {
    // this.store = new Subject();
    this.store = new ReplaySubject();
  }

  dispatch(message) {
    this.store.next(message);
  }

  subscribe(observer) {
    return this.store.subscribe(observer);
  }
}

const myStore = new RxStore();

// // difference between Subject and ReplaySubject - demonstarte with changing dispatch and subscribe order
myStore.dispatch('Hello');
myStore.dispatch('World'); // It's an accumulator

myStore.subscribe(v => console.log(v));
myStore.subscribe(v => console.log('Second subscriber ' + v));

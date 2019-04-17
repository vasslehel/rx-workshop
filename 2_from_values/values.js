import { from } from 'rxjs';

// // Create Observable from value(s)
// // Passing string vs array
const fromString$ = from('hello');
const fromArray$ = from(['hello']);
const fromObject$ = from([{ key: 'hello' }]);

fromString$.subscribe(res => console.log(res));
fromArray$.subscribe(res => console.log(res));
fromObject$.subscribe(res => console.log(res));

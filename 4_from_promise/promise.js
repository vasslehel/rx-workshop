'use strict';
import Rx from 'rxjs/Rx';

const myPromise = new Promise((res, rej) => res(1));
// myPromise.then(v => console.log(v));

// Why would you do this? Because you can merge it, zip it with another Observable
Rx.Observable.fromPromise(myPromise).subscribe((v => console.log(v)));


// http://stackoverflow.com/questions/29478751/how-to-cancel-an-emcascript6-vanilla-javascript-promise-chain
Rx.Observable.ajax('http://localhost:3000/posts/1').subscribe(v => console.log(v.response));
 
// setTimeout(() => {
//   sub.unsubscribe();
// }, 1500);

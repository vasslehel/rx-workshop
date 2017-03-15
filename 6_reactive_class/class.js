'use strict';
import Rx from 'rxjs/Rx';

// Create an Observer Class
class Post {
  constructor() {}

  next(post) {
    this.post = post;
    console.log(`Hello ${this.post.author}!`)
  }

  error(err) {
    console.error(err);
  }

  complete() {
    console.log('Ajax call completed')
  }
}

// Subscribe the class to an observable
Rx.Observable
  .ajax('http://localhost:3000/posts/1')
  .map(res => res.response)
  .subscribe(new Post());
import { map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Create an Observer Class
class Post {
  constructor() {}

  next(post) {
    this.post = post;
    console.log(`Hello ${this.post.author}!`);
  }

  error(err) {
    console.error(err);
  }

  complete() {
    console.log('Ajax call completed');
  }
}

// Subscribe the class to an observable
ajax('http://localhost:3000/posts/1')
  .pipe(map(res => res.response))
  .subscribe(new Post());

// https://stackblitz.com/edit/rxjs-reactive-class-ts?file=index.ts

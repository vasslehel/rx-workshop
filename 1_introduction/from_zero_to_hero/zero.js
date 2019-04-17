const observable = {
  subscribe: observer => {
    document.addEventListener('click', event => {
      observer.next(event);
    });
  },
  pipe: function(operator) {
    return operator(this);
  }
};

const observer = {
  next: x => console.log(x),
  error: err => console.log(err),
  complete: () => console.log('done')
};

const map = function(f) {
  return observable => {
    return {
      subscribe: observer => {
        observable.subscribe({
          next: x => {
            observer.next(f(x));
          },
          error: err => {
            observer.error(err);
          },
          complete: () => {
            observer.complete();
          }
        });
      },
      pipe: function(operator) {
        return operator(this);
      }
    };
  };
};

observable
  .pipe(map(e => e.clientX))
  .pipe(map(x => x - 1000))
  .subscribe(observer);

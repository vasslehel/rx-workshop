const body = document.getElementById('body');
const button = document.getElementById('button');

const clickHandler = () => {
  console.log('clicked');
  removeHandlers();
};
const scrollHandler = () => console.log('scrolled');
const mouseMoveHandler = ev =>
  console.log(`X: ${ev.clientX} \nY: ${ev.clientY}`);
const removeHandlers = () => {
  document.removeEventListener('scroll', scrollHandler);
  body.removeEventListener('mousemove', mouseMoveHandler);
};

button.addEventListener('click', clickHandler);
document.addEventListener('scroll', scrollHandler);
body.addEventListener('mousemove', mouseMoveHandler);

// First solution
// Add remove listener logic in clickHandler

// Second solution
// Create seperate function to remove listeneres, but we still have to call it from click handler

// In both solutions the logic between handlers is strongly coupled


// Start by declaring variables for reference

let burger = document.getElementById('takeOut');
let drawer = document.getElementById('drawer');

burger.addEventListener('click', function() {
  drawer.classList.toggle('open');
  drawer.classList.toggle('closed');
  // e.stopPropagation();
});

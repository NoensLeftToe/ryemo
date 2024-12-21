// Get the hamburger icon and the navbar
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

// When the hamburger icon is clicked
if (bar) {
  bar.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
  });
}
if (close) {
  close.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar
    navbar.classList.remove('active');
  });
}

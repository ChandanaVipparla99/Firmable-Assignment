document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.navbar-toggle');
  const nav = document.querySelector('.navigation-header');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      console.log('Hamburger clicked'); // debug
      nav.classList.toggle('active');
    });
  } else {
    console.log('Toggle or nav not found');
  }
});

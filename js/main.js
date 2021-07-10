const $menuNav = document.getElementById('menuPalanca'),
  $hamburger = document.querySelector('.hamburger'),
  palancaMenu = (_) => $menuNav.classList.toggle('palanca'),
  hamburgerAnimated = (_) => $hamburger.classList.toggle('is-active');

let continuar, continuar_play;

document.addEventListener('click', (e) => {
  if (
    e.target.matches('.botonPalanca') ||
    e.target.matches('.hamburger') ||
    e.target.matches('.hamburger-inner') ||
    e.target.matches('.hamburger-box')
  ) {
    if (!document.querySelector('.inRight')) {
      palancaMenu(e);
      hamburgerAnimated(e);
    }
  }
});

var animItem = bodymovin.loadAnimation({
  container: document.getElementById('anim'),
  /* renderer: 'svg', */
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: '../img/sandy.json',
});

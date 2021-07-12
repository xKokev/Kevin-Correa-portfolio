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

// Formulario
function contactFormValidations() {
  const $form = document.querySelector('.contact-form'),
    $inputs = document.querySelectorAll('.contact-form [required]');
  console.log($inputs);

  $inputs.forEach((input) => {
    const $span = document.createElement('span');
    $span.id = input.name;
    $span.textContent = input.title;
    input.insertAdjacentElement('afterend', $span);
    $span.classList.add('contact-form-error', 'none');
  });

  document.addEventListener('keyup', (e) => {
    if (e.target.matches('.contact-form [required]')) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      if (pattern && $input.value !== '') {
        //console.log('El input tiene patron');
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? document.getElementById($input.name).classList.add('is-active')
          : document.getElementById($input.name).classList.remove('is-active');
      }
      if (!pattern) {
        //  console.log('El input no  tiene patron');
      }
    }
  });

  document.addEventListener('submit', () => {
    //  e.preventDefault();
    alert('Enviando formulario');

    const $loader = document.querySelector('.contact-form-loader'),
      $response = document.querySelector('.contact-form-response');
    $loader.classList.remove('none');

    setTimeout(() => {
      $form.reset();
      $loader.classList.add('none');
      $response.classList.remove('none');
      setTimeout(() => {
        $response.classList.add('none');
      }, 1500);
    }, 2000);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  contactFormValidations();
});

// Animation
let animItem = bodymovin.loadAnimation({
  container: document.getElementById('anim'),
  /* renderer: 'svg', */
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: '../img/sandy.json',
});

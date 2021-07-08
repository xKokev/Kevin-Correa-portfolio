var animItem = bodymovin.loadAnimation({
  container: document.getElementById('anim'),
  /* renderer: 'svg', */ wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  autoplay: true,
  path: '../img/sandy.json',
});

window.addEventListener('load', () => {
  const img = document.getElementById('bds_logo');
  const newSrc = '/assets/forbidden_plants/forbidden_plants_logo.png';
  const pre = new Image();
  pre.onload = () => {
    img.src = newSrc;
  };
  pre.src = newSrc;
});

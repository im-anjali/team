window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 600); // Adjust the timing if needed
});
document.querySelector('.custom-btn.btn-14').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=Z5k3Lzjehzo', '_blank');
  });
  VANTA.WAVES({
    el: "#vanta-canvas",
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x000018,
    shininess: 17.00,
    waveHeight: 9.50,
    zoom: 1.02
  })
  let lastUpdate = 0;
  const fpsLimit = 30;
  
  function updateAnimation(timestamp) {
    if (timestamp - lastUpdate > 1000 / fpsLimit) {
      lastUpdate = timestamp;
      vantaEffect.update(); // Trigger update if applicable
    }
    requestAnimationFrame(updateAnimation);
  }
  
  requestAnimationFrame(updateAnimation);
  // script.js
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

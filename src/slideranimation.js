export function sliderAnimation() {
  const track = document.getElementById('slider-track');
  let x = 0;
  const speed = 2;

  function animate() {
    x -= speed;

    if (Math.abs(x) >= track.scrollWidth / 2) {
      x = 0;
    }

    track.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);
  }

  animate();
}

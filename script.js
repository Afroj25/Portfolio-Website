document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const images = slider.innerHTML;
  slider.innerHTML += images; // Duplicate the images
});
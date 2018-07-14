const imageClick = (e) => {
  imgs.forEach((img) => (img.style.opacity = 1));
  current.src = e.target.src;
  setTimeout(() => current.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}

const current = document.getElementById('current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

imgs[0].style.opacity = opacity;
imgs.forEach((img) => img.addEventListener('click', imageClick));
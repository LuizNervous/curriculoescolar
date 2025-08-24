const toggleButton= document.querySelector('.menu-toggle');
const menu =document.querySelector ('.menu') 

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
const texto = " Luiz Gustavo";
const speed = 100; // velocidade em ms
let i = 0;

function typeWriter() {
  if (i < texto.length) {
    document.getElementById("typewriter").textContent += texto.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.onload = typeWriter;
document.querySelectorAll('#backToTop, #backToTopClean').forEach(btn => {
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

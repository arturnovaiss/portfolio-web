function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Efeito digitando no Frontend Developer inicial abaixo de Artur Novais

document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector('.section__text__p2');
  const text = "Frontend Developer";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        element.textContent = '';
        index = 0;
        typeWriter();
      }, 1000)
    }
  }

  typeWriter();
})

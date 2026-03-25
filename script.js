// Animação da linha do tempo (fade-in ao rolar)
const eventos = document.querySelectorAll('.event');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  eventos.forEach(ev => {
    const top = ev.getBoundingClientRect().top;
    if(top < trigger){
      ev.classList.add('visible');
    }
  });
});

// Typewriter effect para o título inicial
const typewriter = document.querySelector('.typewriter');
if(typewriter){
  const texto = typewriter.textContent;
  typewriter.textContent = '';
  let i = 0;
  function digitar(){
    if(i < texto.length){
      typewriter.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 100);
    }
  }
  digitar();
}

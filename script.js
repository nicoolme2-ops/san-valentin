// Manejo del toque en móviles
const sobre = document.getElementById('sobre-interactivo');
const instruccion = document.getElementById('tap-instruccion');

sobre.addEventListener('click', () => {
    sobre.classList.toggle('abierto');
    instruccion.style.display = 'none'; // Oculta la instrucción al tocar
});

// Lluvia de corazones
function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-caido');
    corazon.innerHTML = '❤';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = Math.random() * 2 + 3 + 's';
    corazon.style.opacity = Math.random();
    corazon.style.fontSize = Math.random() * 15 + 10 + 'px';
    
    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 400);

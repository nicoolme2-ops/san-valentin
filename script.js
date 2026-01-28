function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-caido');
    corazon.innerHTML = '❤';
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = Math.random() * 3 + 2 + 's';
    corazon.style.opacity = Math.random();
    corazon.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 300);
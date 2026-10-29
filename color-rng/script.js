const colorArea = document.querySelector('.area-color');
const btn = document.getElementById('btn');

console.log(colorArea, btn);


function randomColor() { 
    let color = ['red', 'blue', 'green', 'yellow', 'orange', 'turquoise', 'purple'];
    let randomIndex = Math.floor(Math.random() * color.length);
    colorArea.style.backgroundColor = color[randomIndex];
}

btn.addEventListener('click', randomColor);
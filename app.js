const container = document.querySelector('.grid.container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement('div')
    div.className = `div ${i}`;
    container.appendChild(div);
}


let divs = document.querySelectorAll('.div')
divs.forEach(div => {
    div.addEventListener('mouseover', changeColor);
});

function changeColor(e) {
    e.target.classList.add("hovered");
}

// Get all divs 
// Write a function that whever the 'hover' happens
// Log the very div className.
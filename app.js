const container = document.querySelector('.grid.container');



for (let i = 0; i < 256; i++) {
    let div = document.createElement('div')
    div.className = `div ${i}`;
    container.appendChild(div);
}
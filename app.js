const container = document.querySelector('.container');
const submit = document.querySelector('.btn.submit');



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

submit.addEventListener('click', () => {
    let userInput = document.querySelector('#size');
    let newGridSize = userInput.value;
    deleteOldGrid();
    addNewDivs(newGridSize);
});

function deleteOldGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function addNewDivs(newGridSize) {
    let numOfDivs = newGridSize * newGridSize;
    for (let i = 0; i < numOfDivs; i++) {
        let div = document.createElement('div')
        div.className = `div ${i}`;
        container.appendChild(div);
    }
}

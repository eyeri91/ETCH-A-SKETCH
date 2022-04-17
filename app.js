const container = document.querySelector('.container');
const submit = document.querySelector('.btn.submit');
const div = document.querySelector('div');
const divs = document.querySelectorAll('.div');


// Default divs. 16 by 16
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div')
    div.className = `div ${i}`;
    container.appendChild(div);
}

// React to the user input submission

submit.addEventListener('click', () => {
    let userInput = document.querySelector('#size');
    let newGridSize = userInput.value;
    // grid size can't be more than 100 by 100
    deleteOldGrid();
    addNewDivs(newGridSize);
});

// Delete the old divs

function deleteOldGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Add the new divs

function addNewDivs(newGridSize) {
    let numOfDivs = newGridSize * newGridSize;
    for (let i = 0; i < numOfDivs; i++) {
        let div = document.createElement('div')
        div.className = `div ${i}`;
        container.appendChild(div);
    }
    makeNewGrid(newGridSize);
}

// Make new right squared grid.
function makeNewGrid(newGridSize) {
    container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
}


// Change the color of hovered divs.

divs.forEach(div => {
    div.addEventListener('mouseover', changeColor);
});

function changeColor(e) {
    e.target.classList.add("hovered");
}
const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.btn');
const submit = document.querySelector('.btn.submit');
const monoBtn = document.querySelector('.mono');
const pastelBtn = document.querySelector('.pastel');
const randomBtn = document.querySelector('.random');
const resetBtn = document.querySelector('.reset');



// Default divs. 16 by 16
for (let i = 0; i < 256; i++) {
    let div = document.createElement('div')
    div.className = `div ${i}`;
    container.appendChild(div);
}

// React to the user input submission

submit.addEventListener('click', () => {
    let userInput = document.querySelector('#size').value;
    let newGridSize = (userInput.value <= 100 ? userInput.value : 100);
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


let divs = document.querySelectorAll('.div');
divs.forEach(div => {
    div.addEventListener('mouseover', changeColor);
});

// Change to the default hovered color.
function changeColor(e) {
    e.target.classList.add("hovered");
}

// any color button is clicked
//  Remove any class contains 'hovered'
// Add new hoveredcolor;


buttons.forEach(btn => {
    btn.addEventListener('click', removeHovered);
})

function removeHovered() {
    let divs = document.querySelectorAll('.div');
    divs.forEach(div => {
        if (div.classList.contains('hovered')) {
            div.classList.remove('hovered');
        }
    })
}



// monoBtn.addEventListener('click', changeToMono);

// function changeToMono() {

// }

// pastelBtn.addEventListener('click', changeToPastel);
// randomBtn.addEventListener('click', changeToRandom);
// resetBtn.addEventListener('click', backToDefault);
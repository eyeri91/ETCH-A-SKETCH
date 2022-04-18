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
    let userInput = document.querySelector('#size');
    if (userInput.value == '') {
        alert('ERROR: No input given.')
    } else {
        let newGridSize = (userInput.value <= 100 ? userInput.value : 100);
        deleteOldGrid();
        addNewDivs(newGridSize);
    }
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
    let divs = document.querySelectorAll('.div');
    divs.forEach(div => {
        div.addEventListener('mouseover', addHovered);
    });
}


let divs = document.querySelectorAll('.div');
divs.forEach(div => {
    div.addEventListener('mouseover', addHovered);
});

function addHovered(e) {
    e.target.classList.add("hovered");
}


buttons.forEach(btn => {
    btn.addEventListener('click', removeHovered);
})

function removeHovered() {
    let divs = document.querySelectorAll('.div');
    divs.forEach(div => {
        if (div.classList.contains('hovered')) {
            div.classList.remove('hovered');
            div.style.removeProperty('background-color');
        }
    })
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


monoBtn.addEventListener('click', changeToMono);

function changeToMono() {
    let divs = document.querySelectorAll('.div');
    divs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            e.target.classList.add('hovered');
            let rgbNum = getRandomInt(256);
            div.style.backgroundColor = `rgb(${rgbNum},${rgbNum},${rgbNum})`;
        });
    })
}


pastelBtn.addEventListener('click', changeToPastel);

pastelColors = ['#F7E1DE', '#EBD4F0', '#D2E4F3', '#FEF8E4', '#E0F2D9', '#C9EACD'
    , '#BAAAF7', '#FFB8F3',
    '#FFDBF5', '#FFF8E8', '#C2C3F5']

function changeToPastel() {
    let divs = document.querySelectorAll('.div');
    divs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            e.target.classList.add('hovered');
            div.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];;
        });
    })
}

randomBtn.addEventListener('click', changeToRandom);

function changeToRandom() {
    let divs = document.querySelectorAll('.div');
    divs.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            e.target.classList.add('hovered');
            div.style.backgroundColor = `rgb(${getRandomInt(256)},${getRandomInt(256)
                },${getRandomInt(256)})`;
        });
    })
}

resetBtn.addEventListener('click', backToDefault);

function backToDefault() {
    let divs = document.querySelectorAll('.div');
    divs.forEach(div => {
        div.style.removeProperty('background-color');
    })
}
const container = document.getElementById("container");
const newGridButton = document.getElementById("newGrid");

function createSquareDiv(m) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add("gridSquare");
    return squareDiv;
}

function prepareContainer(m) {
    const SCALE = .8;
    const dimension = Math.floor(Math.min(window.innerWidth * SCALE, window.innerHeight * SCALE));
    container.style.width = `${dimension}px`; 
    container.style.height = `${dimension}px`; 
    columnPxStyle = `repeat(${m}, 1fr)`;
    container.style.gridTemplateColumns = columnPxStyle;
}

function createSquareDivs(m) {
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < m; col++) {
            container.appendChild(createSquareDiv(m));
        }
    }
}

function hoverOverGridSquare(e) {
    this.style.background = 'green';
}

function addHoverToGridDivs() {
    const gridSquares = document.querySelectorAll('.gridSquare');
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseover', hoverOverGridSquare))

}

function createGrid(m) {
    prepareContainer(m);
    createSquareDivs(m);
    addHoverToGridDivs();
}

createGrid(16);

newGridButton.addEventListener('click', e => {

    while (true) {
        gridSize = Number(prompt('Choose a new grid size: '));
        if (gridSize > 0 && gridSize <= 100) break;
    }
    container.innerHTML = '';
    createGrid(gridSize);
})
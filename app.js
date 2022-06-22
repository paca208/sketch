let grid_sett = 16;
let cell_size = 2;
let grid_size = grid_sett * grid_sett;
/** @type {HTMLElement} */;
const grid = document.querySelector('#grid-container');
const buttonGSize = document.querySelector('.buttonGSize');
for (let i = 1; i<= grid_size; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('mouseover', () => {
        cell.classList.add('mouseblack');
    });
    grid.style.gridTemplateColumns = `repeat(${grid_sett}, 30px)`;
    grid.style.gridTemplateRows = `repeat(${grid_sett}, 30px)`;
    cell.classList.add('cell');
    grid.appendChild(cell);
    };

buttonGSize.addEventListener('click', () =>{
    let userInput = prompt('Grid size?');
    let grid_sett = userInput;
    let grid_size = grid_sett * grid_sett;
    grid.innerHTML = "";
    for (let i = 1; i<= grid_size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
            cell.classList.add('mouseblack');
        });
        grid.style.gridTemplateColumns = `repeat(${grid_sett}, 30px)`;
        grid.style.gridTemplateRows = `repeat(${grid_sett}, 30px)`;
        cell.classList.add('cell');
        grid.appendChild(cell);
        };
});

    /* grid.setAttribute('style', `grid-template-columns: repeat(${grid_sett}, 30px)`) */
let grid_sett = 16;
let grid_size = grid_sett * grid_sett;
/** @type {HTMLElement} */;
const grid = document.querySelector('#grid');
const buttonGSize = document.querySelector('.buttonGSize');
const small = document.querySelector('.small')
const medium = document.querySelector('.medium')
const large = document.querySelector('.large')
const smallCanvas = document.querySelector('.smallCanvas')
const mediumCanvas = document.querySelector('.mediumCanvas')
const largeCanvas = document.querySelector('.largeCanvas')
const colorPicker = document.querySelector('#colorPicker')
for (let i = 1; i<= grid_size; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `${colorPicker.value}`
    });
    grid.style.gridTemplateColumns = `repeat(${grid_sett}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${grid_sett}, 1fr)`;
    cell.classList.add('cell');
    grid.appendChild(cell);
    };

/*buttonGSize.addEventListener('click', () =>{
    let userInput = prompt('Grid size?');
    let grid_sett = userInput;
    let grid_size = grid_sett * grid_sett;
    grid.innerHTML = "";
    for (let i = 1; i<= grid_size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = `${colorPicker.value}`
        });
        grid.style.gridTemplateColumns = `repeat(${grid_sett}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${grid_sett}, 1fr)`;
        cell.classList.add('cell');
        grid.appendChild(cell);
        };
}); */

small.addEventListener('click', () =>{
    grid.innerHTML = "";
    let grid_sett = 64;
    let grid_size = grid_sett * grid_sett;
    small.classList.add('selected');
    medium.classList.remove('selected');
    large.classList.remove('selected');
    for (let i = 1; i<= grid_size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = `${colorPicker.value}`
        });
        grid.style.gridTemplateColumns = `repeat(${grid_sett}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${grid_sett}, 1fr)`;
        cell.classList.add('cell');
        grid.appendChild(cell);
        };
});
medium.addEventListener('click', () =>{
    grid.innerHTML = "";
    let grid_sett = 32;
    let grid_size = grid_sett * grid_sett;
    medium.classList.add('selected');
    small.classList.remove('selected');
    large.classList.remove('selected');
    for (let i = 1; i<= grid_size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = `${colorPicker.value}`
        });
        grid.style.gridTemplateColumns = `repeat(${grid_sett}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${grid_sett}, 1fr)`;
        cell.classList.add('cell');
        grid.appendChild(cell);
        };
});
large.addEventListener('click', () =>{
    grid.innerHTML = "";
    let grid_sett = 16;
    let grid_size = grid_sett * grid_sett;
    large.classList.add('selected');
    medium.classList.remove('selected');
    small.classList.remove('selected');
    for (let i = 1; i<= grid_size; i++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = `${colorPicker.value}`
        });
        grid.style.gridTemplateColumns = `repeat(${grid_sett}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${grid_sett}, 1fr)`;
        cell.classList.add('cell');
        grid.appendChild(cell);
        };
});
smallCanvas.addEventListener('click', () =>{
    grid.style.width = "300px";
    grid.style.height = "300px";
    smallCanvas.classList.add('selected');
    mediumCanvas.classList.remove('selected');
    largeCanvas.classList.remove('selected');
});
mediumCanvas.addEventListener('click', () =>{
    grid.style.width = "600px";
    grid.style.height = "600px";
    mediumCanvas.classList.add('selected');
    smallCanvas.classList.remove('selected');
    largeCanvas.classList.remove('selected');
});
largeCanvas.addEventListener('click', () =>{
    grid.style.width = "900px";
    grid.style.height = "900px";
    largeCanvas.classList.add('selected');
    mediumCanvas.classList.remove('selected');
    smallCanvas.classList.remove('selected');
});



    /* grid.setAttribute('style', `grid-template-columns: repeat(${grid_sett}, 1fr)`) */
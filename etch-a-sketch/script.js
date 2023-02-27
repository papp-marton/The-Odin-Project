const container = document.getElementById('container');

var columns = 15;
var rows = 15;
let type = true;

const defaultcolor = 'gold';
const othercolor = 'blue';

var grid = document.createElement('div');
grid.className = 'grid';
for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div'); // create row
        row.className = 'row';
        row.textContent = ""; // set text
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
container.appendChild(grid);

grid.addEventListener('mouseover', (e) => {
    if (!type) {
        e.target.style.background = othercolor;
        setTimeout(() => {
            e.target.style.background = defaultcolor;       
        }, 1000);
    }
    if (type) {
        e.target.style.background = othercolor;
    } 
});

function clearDrawing() {
    const boxes = Array.from(
        document.getElementsByClassName('row')
    );

    boxes.forEach(box => {
        box.style.background = defaultcolor;
      });

}


  

clearbtn = document.getElementById('clear-btn');
clearbtn.addEventListener('click', function (e) {
    clearDrawing();
});

typea = document.getElementById('a-btn');
typea.addEventListener('click', function (e) {
    type = true;
});

typeb = document.getElementById('b-btn');
typeb.addEventListener('click', function (e) {
    type = false;
});
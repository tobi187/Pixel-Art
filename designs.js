const sizePicker = document.querySelector('#size-picker');
const pixelCanvas = document.querySelector('#pixel-canvas');
const quickFill = document.querySelector('.quick-fill');

function makeGrid() {
  let gridHeight = document.querySelector('#input-height').value;
  let gridWidth = document.querySelector('#input-width').value;
  pixelCanvas.innerHTML = "";
  
  for (let i = 0; i < gridHeight; i++) {
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    
    for (let j = 0; j < gridWidth; j++) {
      let gridCell = document.createElement('td');
      gridCell.addEventListener('click', function(e) {
        e.target.style.backgroundColor = document.querySelector('#color-picker').value;
      })
      gridRow.appendChild(gridCell);
    }
  }
}

sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();
});

// let down = false;

// pixelCanvas.addEventListener('mousedown', function(e) {
//   down = true;
//   pixelCanvas.addEventListener('mouseup', function() {
//     down = false;
//   });

//   pixelCanvas.addEventListener('mouseleave', function() {
//     down = false;
//   });

//   pixelCanvas.addEventListener('mouseover', function(e) {

//     const color = document.querySelector('#color-picker').value;
//     if (down) {
//       if (e.target,tagName === 'TD') {
//         e.target.style.backgroundColor = color;
//       }
//     }
//   });
// });

// quickFill.addEventListener('click', function(e) {
//   e.preventDefault();
//   const color = document.querySelector('#color-picker').value;
//   pixelCanvas.querySelectorAll('td').forEach(td => td.style.backgroundColor = color);
// });

// pixelCanvas.addEventListener('dblclick', e => {
//   e.target.style.backgroundColor = null;
// });

// eraseMode.addEventListener('click', function() {
//   pixelCanvas.addEventListener('mousedown', function(e) {
//   	down = true;
//   	pixelCanvas.addEventListener('mouseup', function() {
//   		down = false;
//   	});

//     pixelCanvas.addEventListener('mouseleave', function() {
//       down = false;
//     });
//     pixelCanvas.addEventListener('mouseover', function(e) {

//       if (down) {
//         if (e.target.tagName === 'TD') {
//         	e.target.style.backgroundColor = null;
//         }
//       }
//     });
//   });

//   pixelCanvas.addEventListener('mousedown', function(e) {
//     e.target.style.backgroundColor = null;
//   });
// });

// drawMode.addEventListener('click', function() {
//   pixelCanvas.addEventListener('mousedown', function(e) {
//   	down = true;
//   	pixelCanvas.addEventListener('mouseup', function() {
//   		down = false;
//   	});

//     pixelCanvas.addEventListener('mouseleave', function() {
//       down = false;
//     });
//     pixelCanvas.addEventListener('mouseover', function(e) {
//       const color = document.querySelector('#color-picker').value;

//     	if (down) {
//         if (e.target.tagName === 'TD') {
//         	e.target.style.backgroundColor = color;
//         }
//       }
//     });
//   });

//   pixelCanvas.addEventListener('mousedown', function(e) {
//     if (e.target.tagName !== 'TD') return;
//     const color = document.querySelector('#color-picker').value;
//     e.target.style.backgroundColor = color;
//   });
// });
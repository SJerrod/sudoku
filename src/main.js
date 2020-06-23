import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Begin SudokuObject logic
function SudokuObject() {
  this.sudokuPuzzle= [];
  this.currentId = 0
}
let sudokuPuzzle = new SudokuObject(); 

SudokuObject.prototype.addArray = function(array) {
  this.sudokuPuzzle.push(array);
}

SudokuObject.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
//Begin SudokuArray logic
function SudokuArray(){
  let place1 = 0;
  let place2 = 0;
  let place3 = 0;
  let place4 = 0;
  let place5 = 0;
  let place6 = 0;
  let place7 = 0;
  let place8 = 0;
  let place9 = 0;
}

//End sudokuObject logic
SudokuArray.prototype.compare = function(object){
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr2 = arr1.toString();
  object.sort(function(a, b){return a-b});
  let stringInput = object.toString();

  if (stringInput.includes(arr2)) {
  console.log("working");
  }
}

$(document).ready(function() {
  $('#sudokuGrid').submit(function(event) {
    event.preventDefault();
    let cellInputA = $('td.cell-a').val();
    let cellInputB = $('td.cell-b').val();
    let cellInputC = $('td.cell-c').val();
    let cellInputD = $('td.cell-d').val();
    let cellInputE = $('td.cell-e').val();
    let cellInputF = $('td.cell-f').val();
    let cellInputG = $('td.cell-g').val();
    let cellInputH = $('td.cell-h').val();
    let cellInputI = $('td.cell-i').val();


    let arr = new SudokuArray(cellinputA, cellInputB, cellInputC, cellInputD, cellInputE, cellInputF, cellInputG, cellInputH, cellInputI);
    sudokuArray.compare(arr);
    // End input row one
  });
});
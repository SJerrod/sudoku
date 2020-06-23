import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Begin sudokuArray logic
// function SudokuObject() {
//   this.sudokuPuzzle= [];
//   this.currentId = 0
// }
// SudokuObject.prototype.addArray = function(array) {
//   this.sudokuPuzzle.push(array);
// }

// SudokuObject.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// End sudokuArray logic

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let userInput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = arr1.toString();
// userInput.sort(function(a, b){return a-b});
// let stringInput = userInput.toString();

// if (stringInput.includes(arr2)) {
// console.log("working");
// }

$(document).ready(function() {
  $('#sudokuGrid').submit(function(event) {
    event.preventDefault();
    let cellInput = $('td.cell').val();
  });
});
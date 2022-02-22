
const board = document.querySelector(".board")
console.log(board)
const reset = document.getElementById('btn')
let gameStatus = document.getElementById('message')


const sq0=  document.getElementById('sq0')
const sq1=  document.getElementById('sq1')
const sq2= document.getElementById('sq3')
const sq4=  document.getElementById('sq4')
const sq5=document.getElementById('sq5')
const sq6= document.getElementById('sq6')
const sq7 = document.getElementById('sq7')
const sq8 = document.getElementById('sq8')


console.log(board.length)

const winIdx = [ 
  [0,1,2], //horizontal
  [3,4,5],
  [6,7,8],
  
  [0,3,6], //vertical
  [1,4,7],
  [2,5,8],
  [6,4,2], //diagonals
  [0,4,8]
]

/*-------------------Variables (state) ------------------*/
//let sqrArray = new Array(8).fill(0)*/

let winner = [] // X, O, or T
let count  
let index = null

let prevTurns = [];
let turn = "";
for (let i=1; i<9; i++) {
  turn += prevTurns[i] + "<br>";
}

document.getElementById("prevTurns").innerHTML = turn;

function(render)
sq0.addEventListener('click', () => {
  if (turn % 2 === 0) {
  sq0.innerText = 'O'
  } else {
    sq0.innerText = 'X'
  }})
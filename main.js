let cells = document.querySelectorAll('.cell')

gameover = false
let turn = "X"
// function to change the trun
const changeturn = () => {
  return turn === "X" ? "O" : "X"
}

// FUNCTION TO CHOOSE THE X OR Y
xPlayerDisplay.addEventListener('click', () => {
  turn = 'X'


  
  changeturn(document.getElementById("titleHeader").innerText = "Turn for X")

})
oPlayerDisplay.addEventListener('click', () => {
  turn = 'O'


  
   changeturn(document.getElementById("titleHeader").innerText = "Turn for O")

})






// function to check win
const checkwin = () => {
  let boxtext = document.getElementsByClassName('boxtext')
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  win.forEach(e => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)
      && (boxtext[e[0]].innerText !== "")) {
      document.getElementById("titleHeader").innerText = boxtext[e[0]].innerText + "Won"
      document.getElementById('restartBtn').style.visibility = 'visible'
      changeturn()
      gameover = true
    }
    else{
         gameover = true
         document.getElementById('restartBtn').style.visibility = 'visible'
         reset(document.getElementById('restartBtn'))
         

 
    }
  
  })

}

// game logic
let boxes = document.getElementsByClassName("cell");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn;
      turn = changeturn();

      checkwin();
      randomPick()


      if (!gameover) {

        document.getElementById("titleHeader").innerText = "Turn for " + turn;
      }
    }
  })
})

// function changePlayer() {
//   turn = (turn == 'X') ? 'O' : 'X'
// }
// function randomPick() {
//   // Pause the game to allow Computer to pick
//   isPauseGame = true

//   setTimeout(() => {
//       let randomIndex
//       do {
//           // Pick a random index
//           randomIndex = Math.floor(Math.random() * cells.length)
//       } while (
//           // Ensure the chosen cell is empty
//           cells[randomIndex] != ''
//       )

//       // Update the cell with Computer move
//       updateCell(cells[randomIndex], randomIndex, turn)
//       // Check if Computer not won
//       if (!checkwin()) {
//           changePlayer()
//           // Swith back to Human player
//           isPauseGame = false
//           return
//       }
//       turn === "X" ? "O" : "X"
//   }, 1000) // Delay Computer move by 1 second
// }


// function reset(){
  
//     restartBtn.addEventListener('click', () => {
//       let boxtexts = document.querySelectorAll('.boxtext')
//       Array.from(boxtexts).forEach(element => {
//         element.innerText = "";
//       })
//       turn = 'X'
//       gameover = true
//       document.getElementById('restartBtn').style.visibility = 'visible'
//       document.getElementById("titleHeader").innerText = "Draw"
//       document.getElementById("titleHeader").style.fontSize = '14px'

//     })

 
// }



 function reset(){

   
   restartBtn.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
      element.innerText = "";
    })
    turn = 'X'
    gameover = true

    
    document.getElementById('restartBtn').style.visibility = 'visible'
    document.getElementById("titleHeader").innerText = "Choose"
    document.getElementById("titleHeader").style.fontSize = '14px'

  })
  
  
}
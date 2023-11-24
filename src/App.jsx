import GameBoard from './components/GameBoard'
import Player from './components/Player'
import Log from './components/Log';
import GameOver from './components/GameOver';
import { useState } from 'react'

const WINNING_COMBINATIONS = [
  [{row:0,col:0},{row:0,col:1},{row:0,col:2}],
  [{row:1,col:0},{row:1,col:1},{row:1,col:2}],
  [{row:2,col:0},{row:2,col:1},{row:2,col:2}],
  [{row:0,col:0},{row:1,col:0},{row:2,col:0}],
  [{row:0,col:1},{row:1,col:1},{row:2,col:1}],
  [{row:0,col:2},{row:1,col:2},{row:2,col:2}],
  [{row:0,col:0},{row:1,col:1},{row:2,col:2}],
  [{row:0,col:2},{row:1,col:1},{row:2,col:0}]
]

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]

]

function deriveActivePlayer(gameTurns){
  let currentActivePlayer = 'X';
  if(gameTurns.length>0&&gameTurns[0].player=="X"){
    currentActivePlayer = 'O';
  }

  return currentActivePlayer;
}

function App() {

  const [gameTurns,setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for(const turn of gameTurns){
    const {square,player} = turn;
    const {row,col} = square;
    gameBoard[row][col] = player;
  }

  let winner = null;
  

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSqaureSymbol =  gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol =  gameBoard[combination[2].row][combination[2].col];

    if(firstSquareSymbol!=null&&firstSquareSymbol==secondSqaureSymbol&&secondSqaureSymbol==thirdSquareSymbol){
      console.log("Winner is",firstSquareSymbol);
      winner = firstSquareSymbol;
    }
  }

  
  
  
  function handleSelectSquare(rowIndex,colIndex){
    setGameTurns(prevTurns=>{

      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [{ square:{row:rowIndex,col:colIndex} , player:currentPlayer},...prevTurns];
      return updatedTurns;

    });
  }


  return <main>
    <div id="game-container">

      <ol id = "players" className='highlight-player'>
        <Player intialName = "Player 1" symbol = "X" isActive={activePlayer=="X"} />   
        <Player intialName = "Player 2" symbol = "O" isActive={activePlayer=="O"}/>     
          
        
      </ol>
      {winner && <GameOver winner={winner} />}
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      

      GAME BOARD
    </div>
    <Log turns = {gameTurns} />
  </main>
}

export default App

import { useState } from "react";
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]

]

export default function GameBoard({onSelectSquare,currentlyActivePlayer}){

    function handleSquareClicked(rowIndex,colIndex){
        //console.log("Active Player is",currentActivePlayer);
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex] = currentlyActivePlayer;
            return updatedBoard;
        });

        //CHECK FOR WINNER

        



        onSelectSquare();
    }

    const [gameBoard,setGameBoard] = useState(initialGameBoard);

    return <ol id="game-board">
        {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,colIndex)=><li key = {colIndex}><button onClick={()=>handleSquareClicked(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
        </ol>
    </li>)}

    </ol>
}
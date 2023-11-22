import { useState } from "react";
const initialGameBoard = [
    ['X', null, null],
    [null, null, null],
    [null, null, null]

]

export default function GameBoard({onSelectSquare}){

    function handleSquareClicked(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex] = 'X';
            return updatedBoard;
        });

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
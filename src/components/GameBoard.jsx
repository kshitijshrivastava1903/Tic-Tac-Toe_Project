import { useState } from "react";


export default function board({onSelectSquare,board}){

    //let board = initialboard;

    // for(const turn of turns){
    //     const {square, player} = turn;
    //     const {row,col} = square;
    //     board[row][col] = player;
    // }

    function checkSquareALreadySelected(rowIndex,colIndex){
        if(board[rowIndex][colIndex]==null){
            return false;
        }   
        return true;
    }


    function handleSquareClicked(rowIndex,colIndex){
        //console.log("Active Player is",currentActivePlayer);
    //     setboard((prevboard)=>{
    //         const updatedBoard = [...prevboard.map(innerArray=>[...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = currentlyActivePlayer;
    //         return updatedBoard;
    //     });

    //     //CHECK FOR WINNER

        



    //     onSelectSquare();
    // }

    //const [board,setboard] = useState(initialboard);
    }

    return <ol id="game-board">
        {board.map((row,rowIndex)=><li key={rowIndex}>
        <ol>
            {row.map((playerSymbol,colIndex)=><li key = {colIndex}><button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={
                checkSquareALreadySelected(rowIndex,colIndex)?true:false
            }>
                {playerSymbol}</button></li>)}
        </ol>
    </li>)}

    </ol>

}
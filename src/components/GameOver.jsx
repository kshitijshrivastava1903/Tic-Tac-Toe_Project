export default function GameOver({winner}){

    function clearBoard(){
        
        
    }
    return <div id="game-over">
        <h2>Game Over !!</h2>
        <p>{winner} won</p>
        <p>
            <button onClick={clearBoard} >Rematch!</button>
        </p>
    </div>
}
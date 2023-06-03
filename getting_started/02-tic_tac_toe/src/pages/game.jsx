import { useState } from "react";
import Board from "../components/board";

export default function Game(){
    // stores an array of the arrays of states for each Square components.
    const [history, setHistory] = useState([Array(9).fill(null)])
    // currentMove stores the index of the current user move
    const [currentMove, setCurrentMove] = useState(0)
    // stores the current array of Square states
    const currentSquares = history[currentMove]
    // stores the current state players turn based on the
    // value of currentMove. isXNext is true if currentMove
    // is even is false.
    const isXNext = (currentMove % 2 === 0)

    // immutably modifies the list of moves and adds it to history.
    // then set the Game UI to the new state.
    function handlePlay(newSquares){
        // add a new array of square states to the history
        const newHistory = [...history.slice(0, currentMove + 1), newSquares]
        // adds the newSquares to the history array
        setHistory(newHistory)
        // sets the current move of the game
        setCurrentMove(newHistory.length - 1)
    }

    // reset the game to a selected time
    function jumpTo(newMove){
        setCurrentMove(newMove)
    }

    // transform the history array into a list of React components.
    const moves = history.map((squares, move)=>{
        let description = move > 0
            ? `Go to move #${move}`
            : `Go to game start.`
        return (
            <li key={move}>
                <button onClick={()=>jumpTo(move)}> {description} </button>
            </li>
        )
    })

    // returns a markup for the Game.
    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    isXNext={ isXNext } 
                    squares={ currentSquares } 
                    onPlay={ handlePlay }/>
            </div>
            <div className="game-info">
                <ol>{ moves }</ol>
            </div>
        </div>
    )
}
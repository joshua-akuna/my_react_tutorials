import { useState } from "react"
import Square from "../components/square"

export default function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))

    /**
     * onSquareClick - handles the click event for each
     *      square that updates its value.
     * @index: the index of the square to update.
     * Return: Nothing.
     * 
     * @description: This function updates the squares
     *      array immutably.i.e. creates a new copy of
     *      the current square array, updates it and set
     *      it the current square array.
     */
    const onSquareClick = (index)=>{
        // creates a new copy of the current square array
        const newSquares = squares.slice()
        // updates an index of the new square array
        newSquares[index] = 'X'
        // replaces the current array with the new array
        setSquares(newSquares)
    }
    return (
        <div className="flex col">
            <section className="flex row">
                <Square value={squares[0]} clickHandler={()=>onSquareClick(0)}/>
                <Square value={squares[1]} clickHandler={()=>onSquareClick(1)}/>
                <Square value={squares[2]} clickHandler={()=>onSquareClick(2)}/>
            </section>
            <section className="flex row">
                <Square value={squares[3]} clickHandler={()=>onSquareClick(3)}/>
                <Square value={squares[4]} clickHandler={()=>onSquareClick(4)}/>
                <Square value={squares[5]} clickHandler={()=>onSquareClick(5)}/>
            </section>
            <section className="flex row">
                <Square value={squares[6]} clickHandler={()=>onSquareClick(6)}/>
                <Square value={squares[7]} clickHandler={()=>onSquareClick(7)}/>
                <Square value={squares[8]} clickHandler={()=>onSquareClick(8)}/>
            </section>
        </div>
    )
}
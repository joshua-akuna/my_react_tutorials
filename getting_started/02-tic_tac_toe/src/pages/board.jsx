import { useState } from "react"
import Square from "../components/square"

export default function Board(){
    // stores a boolean state to switch from 'X' to 'O'
    const [isXNext, setIsXNext] = useState(true)
    // stores an array of states for each Square element
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
        // returns if the element is filled to prevent
        // a square from overwritten by a new value.
        if (squares[index]) {
            return
        }
        // creates a new copy of the current square array
        const newSquares = squares.slice()
        // updates an index of the new square array
        newSquares[index] = isXNext? 'X' : 'O'
        // replaces the current array with the new array
        setSquares(newSquares)
        // toggle the isXNext boolean variable
        setIsXNext(!isXNext)
    }
    return (
        <div className="flex col">
            <section className="flex row">
                <Square value={ squares[0] } handleClick={ ()=>onSquareClick(0) }/>
                <Square value={ squares[1] } handleClick={ ()=>onSquareClick(1) }/>
                <Square value={ squares[2] } handleClick={ ()=>onSquareClick(2) }/>
            </section>
            <section className="flex row">
                <Square value={ squares[3] } handleClick={ ()=>onSquareClick(3) }/>
                <Square value={ squares[4] } handleClick={ ()=>onSquareClick(4) }/>
                <Square value={ squares[5] } handleClick={ ()=>onSquareClick(5) }/>
            </section>
            <section className="flex row">
                <Square value={ squares[6] } handleClick={ ()=>onSquareClick(6) }/>
                <Square value={ squares[7] } handleClick={ ()=>onSquareClick(7) }/>
                <Square value={ squares[8] } handleClick={ ()=>onSquareClick(8) }/>
            </section>
        </div>
    )
}
import { useState } from "react"
import Square from "../components/square"

export default function Board(){
    const [squares, setSquares] = useState(Array(9).fill(null))

    const onSquareClick = ()=>{
        const newSquares = squares.slice()
        newSquares[0] = 'X'
        setSquares(newSquares)
    }
    return (
        <div className="flex col">
            <section className="flex row">
                <Square value={squares[0]} clickHandler={onSquareClick}/>
                <Square value={squares[1]} clickHandler={onSquareClick}/>
                <Square value={squares[2]} clickHandler={onSquareClick}/>
            </section>
            <section className="flex row">
                <Square value={squares[3]} clickHandler={onSquareClick}/>
                <Square value={squares[4]} clickHandler={onSquareClick}/>
                <Square value={squares[5]} clickHandler={onSquareClick}/>
            </section>
            <section className="flex row">
                <Square value={squares[6]} clickHandler={onSquareClick}/>
                <Square value={squares[7]} clickHandler={onSquareClick}/>
                <Square value={squares[8]} clickHandler={onSquareClick}/>
            </section>
        </div>
    )
}
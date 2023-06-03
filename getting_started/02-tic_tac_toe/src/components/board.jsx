import Square from "./square"

export default function Board({ isXNext, squares, onPlay}){
    // stores the value of the winner if any
    const winner = determineWinner(squares)
    // checks if there's a winner and display a prompt
    const status = winner? `Player ${winner} wins` : 
        `Player ${ isXNext? 'X' : 'O'} turn...`
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
        if (squares[index] || determineWinner(squares)) {
            return
        }
        // creates a new copy of the current square array
        const nextSquares = squares.slice()
        // updates an index of the new square array
        nextSquares[index] = isXNext? 'X' : 'O'
        // calls the handleClick callback function on the
        // Game component.
        onPlay(nextSquares)
    }

    return (
        <>
        <div>
            <h2 style={{color: winner? 'red' : 'blue'}}> {status} </h2>
        </div>
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
        </>
    )

    /**
     * determineWinner - contains an algorithm determines
     *      if there's a winner.
     * @squares: has the current state of the Square elements.
     */
    function determineWinner(squares){
        const winRows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        // this algorithm checks if the values of the
        // elements of each index in each row of the
        // winRow array in the squares argument is the same.
        for (let row = 0; row < winRows.length; row++){
            const [x, y, z] = winRows[row]
            if (squares[x] && squares[x] == squares[y]
                && squares[x] == squares[z])
                return (squares[x])
        }
        return (null)
    }
}
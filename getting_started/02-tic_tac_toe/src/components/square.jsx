import '../App.css'
/**
 * Square - This is an interactive React component
 *      for a cell in a tic-tac-toe game.
 * @value: a string to be displayed by the square.
 * @clickHandler: a callback function that updates the
 *      values of a square.
 * Return: returns a button (square element) displaying a value.
 */
export default function Square({ value, handleClick }){
    return (
        <button className='square' onClick={ handleClick }>
            { value }
        </button>
    )
}
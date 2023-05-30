import { Link } from 'react-router-dom';
import '../App.css'

const user = {
    name: 'Akuna Joshua',
    img: '',
    imgSize: '',
}

export default function AboutMe(){
    return (
        <div className='center text-center'>
            <h1>About Me</h1>
            <p> {user.name} </p>
            <Link to='/' className='btn'> Home </Link>
        </div>
    );
}
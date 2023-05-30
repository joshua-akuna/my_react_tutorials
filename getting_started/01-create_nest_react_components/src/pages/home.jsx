import '../App.css'
import { Link } from 'react-router-dom';
  
export default function Home() {
  return (
    <div className='center text-center'>
      <h1 className='header'> My React Tutorials Page</h1>
      <Link to='./about_me' className='btn'> About me </Link>
    </div>
  );
}
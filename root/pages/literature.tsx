import "./literature.css";
import { Link } from 'react-router-dom';

function Literature() {
    return (
      <div className="literature">
            <h1>Literature</h1>
        <p>Explore the world of literature with us.</p>
        <div>
          <Link to='/' className="home-link text-white underline text-xl hover:text-gray-300 transition-colors">
              <p className='text-white underline hover:text-red-600 transition-colors '>home</p>
          </Link>
        </div>
      </div>
      
    );
}

export default Literature;